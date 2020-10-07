import React, { useState, useEffect, useContext } from 'react';
import { FormProvider as DataForm, FormContext } from 'contexts/FormContext';
import { http } from 'utils/httpClient';
import loader from 'assets/svg/loader.svg';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import { SnackbarContext } from 'contexts/SnackbarContext';

const EditPost = ({ match }) => {
  const [fetching, setFetching] = useState(false);
  const [currentPostData, setCurrentPostData] = useState({});
  const { title, shortContent, fullContent } = currentPostData;
  const { triggerSnackbar } = useContext(SnackbarContext);

  useEffect(() => {
    const getCurrentPostData = async () => {
      try {
        const res = await http.getPost(match.params.id);
        if (res) {
          setCurrentPostData(res);
        }
      } catch (err) {
        console.log(err);
      }
      return false;
    };

    getCurrentPostData();
  }, []);

  const onSubmit = async inputs => {
    setFetching(true);
    try {
      const res = await http.updatePost(currentPostData._id, inputs);

      if (res) {
        console.log(res);
        setFetching(false);
        triggerSnackbar('Pomyślnie zaktualizowano post! :)');
      }
    } catch (err) {
      triggerSnackbar('Wystąpił błąd! :(');
    }
  };

  if (fetching) {
    return <img src={loader} alt="loading" />;
  }

  return (
    <>
      <Heading>Edit post</Heading>
      <DataForm onSubmit={onSubmit}>
        <Input
          context={FormContext}
          name="title"
          placeholder={title}
          initValue={title}
        />
        <Input
          context={FormContext}
          area
          name="shortContent"
          placeholder={shortContent}
          initValue={shortContent}
        />
        <Input
          context={FormContext}
          area
          name="fullContent"
          placeholder={fullContent}
          initValue={fullContent}
        />
        <Button type="submit" disabled={fetching}>
          {fetching ? 'Saving...' : 'Update post'}
        </Button>
      </DataForm>
    </>
  );
};

export default EditPost;
