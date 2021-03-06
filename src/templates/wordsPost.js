import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import "./wordsPost.css";

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <>
      <Helmet title={post.frontmatter.title} />
      <Container className="blog-post-container">
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          {/* <h2>{post.frontmatter.date}</h2> */}
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Container>
    </>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
