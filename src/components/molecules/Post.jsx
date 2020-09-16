import React from 'react';
import Button from 'components/atoms/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';

const StyledPost = styled.div`
  box-shadow: 0px 3px 10px -2px ${({ theme }) => theme.grey200};
  border-radius: 25px;
  padding: 15px;
`;

const Post = ({ id, title, posted, shortContent, fullContent, preview }) => {
  return (
    <StyledPost id={id}>
      <Heading>{title}</Heading>
      <span>{posted}</span>
      {preview ? (
        <>
          <Paragraph>{shortContent}</Paragraph>
          <Button as={Link} type="button" to={`/article/${id}`}>
            Read more
          </Button>
        </>
      ) : (
        <Paragraph>{fullContent}</Paragraph>
      )}
    </StyledPost>
  );
};

export default Post;
