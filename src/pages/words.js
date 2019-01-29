import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import PostLink from '../components/PostLink';

const WordsContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  @media (max-width: 530px) {
    width: 95%;
    font-size: 12px;
  }
`;

const WordsPost = styled.li`
  list-style-type: none;
`;

export default function wordsPage({ data }) {
  const words = data.allMarkdownRemark.edges.map(edge => edge.node);

  return (
    <>
      <Helmet title="Words" />
      <WordsContainer>
        {words.map(wordPost => (
          <WordsPost key={wordPost.id}>
            <PostLink post={wordPost} />
          </WordsPost>
        ))}
      </WordsContainer>
    </>
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
