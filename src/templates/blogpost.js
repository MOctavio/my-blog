import React from 'react';

import Layout from '../components/layout';

import { graphql } from 'gatsby';


const Template = ({ data: { markdownRemark } }) => {
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
    <Layout>
      <h1 style={{ fontFamily: 'roboto, sans-serif' }}>{title}</h1>
      <div className='blogpost'
        dangerouslySetInnerHTML={{ __html: html }}
        style={{
          fontFamily: 'roboto, sans-serif',
          textAlign: 'justify'
        }}
      />
    </Layout>
  )
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Template;