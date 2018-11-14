import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const PostLinkContainer = styled(Link)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  text-decoration: none;
  color: gray;
  border-bottom: 1px solid gray;

  :hover {
    color: black;
    border-bottom: 1px solid black;
  }
`;

const PostLink = ({ post }) => (
  <PostLinkContainer to={post.frontmatter.path}>
    <b>{post.frontmatter.title}</b>
    <div>{post.frontmatter.date}</div>
  </PostLinkContainer>
);

export default PostLink;
