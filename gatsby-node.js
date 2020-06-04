/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = (({ graphql, actions }) => {
	const { createPage } = actions;
	const blogPostTemplate = path.resolve('src/templates/blogPost.js');

	return graphql(`
    query {
			allMarkdownRemark (
				sort: {order: ASC, fields: [frontmatter___date]}
			) {
				edges {
					node {
						frontmatter {
							path
							title
							tags
						}
					}
				}
			}
    }
    `
	).then(result => {
		createTagPages(createPage, result.data.allMarkdownRemark.edges);

		result.data.allMarkdownRemark.edges.map(({ node }) => {
			const path = node.frontmatter.path;
			createPage({
				path,
				component: blogPostTemplate,
				context: {
					pathSlug: path
				}
			});
		});
	});
});

const createTagPages = (createPage, posts) => {
	const allTagsIndexTemplate = path.resolve('src/templates/allTagsIndex.js');
	const singleTagIndexTemplate = path.resolve('src/templates/singleTagIndex.js');

	const postsByTag = {};

	posts.map(({ node }) => {
		if (node.frontmatter.tags) {
			node.frontmatter.tags.map(tag => {
				if (!postsByTag[tag]) {
					postsByTag[tag] = [];
				}

				postsByTag[tag].push(node);
			});
		}
	});

	const tags = Object.keys(postsByTag);

	createPage({
		path: '/tags',
		component: allTagsIndexTemplate,
		context: {
			tags: tags.sort()
		}
	});

	tags.map(tag => {
		const posts = postsByTag[tag];

		createPage({
			path: `/tags/${tag}`,
			component: singleTagIndexTemplate,
			context: {
				posts,
				tag
			}
		});
	});
};
