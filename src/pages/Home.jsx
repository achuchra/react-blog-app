import React from 'react';
import Posts from 'components/organisms/Posts';
import Heading from 'components/atoms/Heading';

const Home = () => (
  <>
    <Heading big>Recent posts</Heading>
    <Posts />
  </>
);

export default Home;
