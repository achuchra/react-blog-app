import React, { useState, useEffect } from 'react';
import { http } from 'utils/httpClient';
import Post from 'components/molecules/Post';
import loaderSvg from 'assets/svg/loader.svg';

const Dashboard = () => {
  const [postsData, setPostsData] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const res = await http.getPosts();

      if (res) {
        setFetching(false);
        setPostsData(res);
      }
    };

    getPosts();
  }, []);

  if (fetching) {
    return <img src={loaderSvg} alt="loading" />;
  }

  return postsData.map(({ title }) => {
    return <Post dashboard title={title} />;
  });
};

export default Dashboard;