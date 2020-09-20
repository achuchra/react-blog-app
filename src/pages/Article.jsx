import React, { useState, useEffect } from 'react';
import { http } from 'utils/httpClient';
import loaderSvg from 'assets/svg/loader.svg';
import Post from 'components/molecules/Post';
import { formatDate } from '../utils/formatDate';

const Article = ({ match }) => {
  const [fetching, setFetching] = useState();
  const [postData, setPostData] = useState({});

  useEffect(() => {
    const getData = async () => {
      setFetching(true);
      const res = await http.getPost(match.params.id);

      if (res) {
        setPostData(state => ({
          ...state,
          ...res,
        }));
        setFetching(false);
      }
    };

    getData();
  }, []);

  if (fetching) {
    return <img src={loaderSvg} alt="loading" />;
  }
  const { _id, title, posted, fullContent } = postData;
  return (
    <Post
      id={_id}
      title={title}
      posted={formatDate(posted)}
      fullContent={fullContent}
    />
  );
};

export default Article;
