import React from 'react';
import Button from 'components/atoms/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import pencil from 'assets/svg/pencil.svg';
import dustbin from 'assets/svg/dustbin.svg';

const StyledPost = styled.div`
  box-shadow: 0px 3px 10px -2px ${({ theme }) => theme.grey200};
  border-radius: 25px;
  padding: 15px;
  position: relative;

  span {
    color: ${({ theme }) => theme.grey300};
    position: absolute;
    right: 25px;
    top: 0;
    transform: translateY(-40%);
    font-size: ${({ theme }) => theme.fontSize.xs};
    background: ${({ theme }) => theme.white};
    padding: 0 10px;
  }

  p {
    margin-bottom: 10px;
  }
`;

const DashboardPost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 15px;
  border-bottom: 1px solid #fafafa;
  border-radius: 5px;
  transition: box-shadow 0.1s ease-in-out;

  div {
    display: flex;

    a {
      display: block;
      width: 24px;
      margin-right: 15px;
    }
  }

  a,
  img {
    transition: transform 0.1s ease-in-out;

    &:hover {
      transform: translateY(-2px);
    }
  }

  &:hover {
    box-shadow: 0px 3px 15px -10px #000;
  }
`;

const Post = ({
  id,
  title,
  posted,
  shortContent,
  fullContent,
  preview,
  dashboard,
  onDelete = '',
}) => {
  if (dashboard) {
    return (
      <DashboardPost>
        <span>{title}</span>
        <div>
          <Link to={`/edit/${id}`}>
            <img src={pencil} alt="edit" />
          </Link>
          <a href="#" type="button" onClick={e => onDelete(id, e)}>
            <img src={dustbin} alt="delete" />
          </a>
        </div>
      </DashboardPost>
    );
  }
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
