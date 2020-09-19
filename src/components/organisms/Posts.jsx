import React, { useEffect, useState } from 'react';
import GridTemplate from 'templates/GridTemplate';
import { http } from 'utils/httpClient';
import Post from 'components/molecules/Post';
import loaderSvg from 'assets/svg/loader.svg';
import { formatDate } from 'utils/formatDate';

const Posts = () => {
  const [fetching, setFetching] = useState();
  const [postsData, setPostsData] = useState({});

  useEffect(() => {
    const getData = async () => {
      setFetching(true);
      const res = await http.getPosts();

      if (res) {
        console.log(res);
        setPostsData(state => ({
          ...state,
          ...res,
        }));
        setFetching(false);
      }
    };

    getData();
  }, []);

  return fetching ? (
    <img src={loaderSvg} alt="loading" />
  ) : (
    <GridTemplate>
      {Object.keys(postsData).map(key => {
        const {
          _id,
          title,
          posted,
          author,
          shortContent,
          fullContent,
        } = postsData[key];

        return (
          <Post
            key={_id}
            id={_id}
            title={title}
            posted={formatDate(posted)}
            author={author}
            shortContent={shortContent}
            fullContent={fullContent}
            preview
          ></Post>
        );
      })}
    </GridTemplate>
  );
};

export default Posts;
