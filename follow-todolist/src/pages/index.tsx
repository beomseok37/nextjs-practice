import type { NextPage } from 'next';

import MyButton from 'src/components/MyButton';
import AppBlock from 'src/components/AppBlock';

import styles from 'src/styles/pages/index.module.scss';

const Home: NextPage = () => {
  return (
    <AppBlock>
      <div className={styles.button_group}>
        <MyButton size="large">Button</MyButton>
        <MyButton outline>Button</MyButton>
        <MyButton size="small">Button</MyButton>
      </div>
      <div className={styles.button_group}>
        <MyButton size="large" color="gray">
          Button
        </MyButton>
        <MyButton color="gray" outline>
          Button
        </MyButton>
        <MyButton size="small" color="gray">
          Button
        </MyButton>
      </div>
      <div className={styles.button_group}>
        <MyButton size="large" color="pink">
          Button
        </MyButton>
        <MyButton color="pink" outline>
          Button
        </MyButton>
        <MyButton size="small" color="pink">
          Button
        </MyButton>
      </div>
    </AppBlock>
  );
};

export default Home;
