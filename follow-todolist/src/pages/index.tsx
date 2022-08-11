import type { NextPage } from 'next';
import Router from 'next/router';

import MyButton from 'src/components/MyButton';
import styles from 'src/styles/pages/index.module.scss';
import Header from '../components/header/index';

const Home: NextPage = () => {
  return (
    <>
      <Header pageName="home" />
      <div className={styles.wrapper}>
        <div className={styles.buttons_wrapper}>
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
        </div>
      </div>
    </>
  );
};

export default Home;
