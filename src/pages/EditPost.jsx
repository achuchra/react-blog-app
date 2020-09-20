import React, { useState, useEffect } from 'react';
import { FormProvider as DataForm, FormContext } from 'contexts/FormContext';
import { http } from 'utils/httpClient';
import loader from 'assets/svg/loader.svg';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';

const EditPost = ({ match }) => {
  const [fetching, setFetching] = useState(true);
  const [currentPostData, setCurrentPostData] = useState({});

  useEffect(() => {
    const getCurrentPostData = async () => {
      try {
        const res = await http.getPost(match.params.id);
        if (res) {
          setCurrentPostData(res);
          setFetching(false);
        }
      } catch (err) {
        console.log(err);
      }
      return false;
    };

    getCurrentPostData();
  }, []);

  const onSubmit = async inputs => {
    try {
      const res = await http.updatePost(currentPostData._id, inputs);

      if (res) {
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (fetching) {
    return <img src={loader} alt="loading" />;
  }

  const { title, shortContent, fullContent } = currentPostData;

  return (
    <>
      <Heading>Edit post</Heading>
      <DataForm onSubmit={onSubmit}>
        <Input
          context={FormContext}
          name="title"
          placeholder={title}
          initialValue={title}
        />
        <Input
          context={FormContext}
          area
          name="shortContent"
          placeholder={shortContent}
          initialValue={shortContent}
        />
        <Input
          context={FormContext}
          area
          name="fullContent"
          placeholder={fullContent}
          initialValue={fullContent}
        />
        <Button type="submit" disabled={fetching}>
          Update post
        </Button>
      </DataForm>
    </>
  );
};

export default EditPost;
