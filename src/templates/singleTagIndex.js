import React from 'react';

import Layout from '../components/layout';

import { Link } from "gatsby";

const SingleTagTemplate = ({ pageContext: { tag, posts } }) => (
  <Layout>
    <h3>#{tag} - Related Posts</h3>
    {
      posts.map(({ frontmatter: { path, title } }) =>
        <div
          key={path}
        >
          <Link
            style={{ display: 'block' }}
            to={`/tags/${path}`}
          >
            {title}
          </Link>
        </div>
      )
    }
  </Layout>);

export default SingleTagTemplate;