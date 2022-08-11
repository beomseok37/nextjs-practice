import type { NextPage } from 'next';

import MyButton from 'src/components/MyButton';
import AppBlock from 'src/components/AppBlock';

const Home: NextPage = () => {
  return (
    <AppBlock>
      <MyButton>Button</MyButton>
    </AppBlock>
  );
};

export default Home;
