import type { NextPage } from 'next';
import Link from 'next/link';

import styles from 'src/styles/pages/index.module.scss';
import Header from '../components/header/index';

const Home: NextPage = () => {
  return (
    <>
      <Header pageName="home" />
      <div className={styles.wrapper}>
        <Link href="/button">
          <a className={styles.my_link}>button</a>
        </Link>
        <Link href="/box">
          <a className={styles.my_link}>box</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
