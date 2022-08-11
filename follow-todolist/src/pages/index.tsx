import type { NextPage } from 'next';

import MyButton from 'src/components/MyButton';
import AppBlock from 'src/components/AppBlock';

import styles from 'src/styles/pages/index.module.scss';

const Home: NextPage = () => {
  return (
    <AppBlock>
      <div className={styles.button_group}>
        <MyButton
          size="large"
          onClick={() => {
            console.log('hihihihi');
          }}
        >
          Button
        </MyButton>
        <MyButton
          onMouseMove={() => {
            console.log('mouse move');
          }}
        >
          Button
        </MyButton>
        <MyButton size="small">Button</MyButton>
      </div>
      <div className={styles.button_group}>
        <MyButton size="large" color="gray">
          Button
        </MyButton>
        <MyButton color="gray">Button</MyButton>
        <MyButton size="small" color="gray">
          Button
        </MyButton>
      </div>
      <div className={styles.button_group}>
        <MyButton size="large" color="pink">
          Button
        </MyButton>
        <MyButton color="pink">Button</MyButton>
        <MyButton size="small" color="pink">
          Button
        </MyButton>
      </div>
      <div className={styles.button_group}>
        <MyButton size="large" color="pink" outline>
          Button
        </MyButton>
        <MyButton color="pink" outline>
          Button
        </MyButton>
        <MyButton size="small" color="pink" outline>
          Button
        </MyButton>
      </div>
      <div className={styles.button_group}>
        <MyButton size="large" fullWidth>
          Button
        </MyButton>
        <MyButton color="gray" fullWidth>
          Button
        </MyButton>
        <MyButton size="small" color="pink" fullWidth>
          Button
        </MyButton>
      </div>
    </AppBlock>
  );
};

export default Home;
