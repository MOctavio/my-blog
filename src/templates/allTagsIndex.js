import React from 'react';

import Layout from '../components/layout';

import { Link } from "gatsby";

const AllTagsTemplate = ({ pageContext: { tags } }) => (
  <Layout>
    <h3>Available Tags</h3>
    {
      tags.map(tag =>
        <Link
          style={{ display: 'block' }}
          to={`/tags/${tag}`}
          key={tag}
        >
          #{tag}
        </Link>
      )
    }
  </Layout>
);

export default AllTagsTemplate;
