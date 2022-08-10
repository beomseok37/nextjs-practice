import type { NextPage } from 'next';

import Title from 'src/components/Title';
import Content from 'src/components/Content/index';
import TodoWrapper from 'src/components/TodoWrapper';

const Home: NextPage = () => {
  return (
    <div className="body">
      <Title></Title>
      <Content></Content>
      <TodoWrapper></TodoWrapper>
    </div>
  );
};

export default Home;
