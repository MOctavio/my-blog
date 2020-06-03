/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = (({graphql, actions}) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/blogPost.js');

  return graphql(`
    query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							path
						}
					}
				}
			}
    }
    `
	).then(result => {
    result.data.allMarkdownRemark.edges.map(({node}) => {
			const path = node.frontmatter.path;
			createPage({
				path,
				component: blogPostTemplate,
				context: {
					pathSlug: path
				}
			});
			resolve();
    });
	});
});
