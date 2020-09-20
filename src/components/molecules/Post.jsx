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

  div {
    display: flex;

    a {
      display: block;
      width: 24px;
    }
  }
`

const Post = ({
  id,
  title,
  posted,
  shortContent,
  fullContent,
  preview,
  dashboard,
}) => {
  if (dashboard) {
    return (
      <DashboardPost>
        <span>{title}</span>
        <div>
          <Link to={`/edit/${id}`}>
            <img src={pencil} alt='edit' />
          </Link>
          <img src={dustbin} alt='delete' />
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
