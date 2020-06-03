import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Link } from "gatsby";

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <>
      <Layout>
        <SEO title="Home" />
        { edges.map(({ node: { frontmatter } }) => {
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
