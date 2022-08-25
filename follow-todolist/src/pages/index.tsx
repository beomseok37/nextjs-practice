import type { NextPage } from 'next';
import Router from 'next/router';

import MyButton from 'src/components/MyButton';
import { ButtonsWrapper } from 'src/styles/pages';
import Header from '../components/header/index';

const Home: NextPage = () => {
  return (
    <>
      <Header pageName="home" />
      <ButtonsWrapper>
        <MyButton
          size="large"
          color="gray"
          onClick={() => Router.push('/button')}
        >
          Button
        </MyButton>
        <MyButton size="large" color="gray" onClick={() => Router.push('/box')}>
          Box
        </MyButton>
      </ButtonsWrapper>
    </>
  );
};

export default Home;
