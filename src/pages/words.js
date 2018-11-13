import React from 'react';
import { graphql } from 'gatsby';
import PostLink from '../components/PostLink';

export default function wordsPage({ data }) {
  const words = data.allMarkdownRemark.edges.map(edge => edge.node);

  return (
    <div>
      {words.map(wordPost => (
        <li key={wordPost.id}>
          <PostLink post={wordPost} />
        </li>
      ))}
    </div>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
