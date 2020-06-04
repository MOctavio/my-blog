import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Link, graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <h3 style={{ color: 'rebeccapurple' }}>Blog Posts</h3>
        {edges.map(({ node: { frontmatter } }) => {
          return (
            <div
              key={frontmatter.path}
            >
              <Link to={frontmatter.path}>
                {frontmatter.title}
              </Link>
              <p
                style={{
                  fontSize: '.3rem',
                  marginBottom: '0'
                }}
              >
                {frontmatter.date}
              </p>
              <p>{frontmatter.excerpt}</p>
            </div>
          )
        })}
        <h4 style={{
          backgroundColor: 'whitesmoke',
          padding: '15px'
        }}>
          <Link to="/tags">Search all tags</Link>
        </h4>
      </Layout>
    </>
  );
};

export const query = graphql`
query homePageQuery {
  allMarkdownRemark  (
    sort: {order: DESC, fields: [frontmatter___date]}
  ) {
    edges {
      node{
        frontmatter{
          title
          path
          excerpt
          date
        }
      }
    }
  }
}`;

export default IndexPage;
