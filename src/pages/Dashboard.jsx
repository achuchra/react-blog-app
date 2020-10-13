import React, { useState, useEffect, useContext } from 'react';
import { http } from 'utils/httpClient';
import Post from 'components/molecules/Post';
import loaderSvg from 'assets/svg/loader.svg';
import Heading from 'components/atoms/Heading';
import { SnackbarContext } from 'contexts/SnackbarContext';

const Dashboard = () => {
  const [postsData, setPostsData] = useState([]);
  const [fetching, setFetching] = useState(true);
  const { triggerSnackbar } = useContext(SnackbarContext);

  const handleDeletePost = async (id, e) => {
    e.preventDefault();
    try {
      const res = await http.deletePost(id);
      if (res) {
        triggerSnackbar('Pomyślnie usunięto post! :)');
        setPostsData(state => [...state.filter(({ _id }) => _id !== id)]);
        console.log(postsData);
      }
    } catch (err) {
      triggerSnackbar('Wystąpił błąd! :(');
    }
  };

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

  return (
    <>
      <Heading big>Manage posts</Heading>
      {postsData.map(({ _id, title }) => {
        return (
          <Post
            onDelete={handleDeletePost}
            dashboard
            title={title}
            key={_id}
            id={_id}
          />
        );
      })}
    </>
  );
};

export default Dashboard;
