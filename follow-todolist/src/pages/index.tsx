import type { NextPage } from 'next';
import Router from 'next/router';

import MyButton from 'src/components/MyButton';
import Header from 'src/components/Header';
import SideBar from 'src/components/SideBar';
import Row from 'src/components/Grid/Row';
import Column from 'src/components/Grid/Column';

import { ButtonsWrapper } from 'src/styles/pages';

const Home: NextPage = () => {
  return (
    <Row>
      <SideBar />
      <Column>
        <Header pageName="home" />
        <ButtonsWrapper>
          <MyButton
            size="large"
            color="gray"
            onClick={() => Router.push('/button')}
          >
            Button
          </MyButton>
          <MyButton
            size="large"
            color="gray"
            onClick={() => Router.push('/box')}
          >
            Box
          </MyButton>
        </ButtonsWrapper>
      </Column>
    </Row>
  );
};

export default Home;
