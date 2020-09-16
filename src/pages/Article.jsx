import React, { useState, useEffect } from 'react';
import { http } from 'utils/httpClient';
import loaderSvg from 'assets/svg/loader.svg';

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
  } else {
    const { title, posted, fullContent } = postData;
    console.log(title, posted, fullContent);

    // let postedDate = posted && posted.substring(0, 10);
    console.log(posted && posted.substring(0, 10));

    return (
      <>
        <div>{title}</div>
        <div>{posted}</div>
        <div>{fullContent}</div>
      </>
    );
  }
};

export default Article;
