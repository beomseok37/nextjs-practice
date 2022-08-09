import type { NextPage } from 'next';
import Title from 'src/components/Title';
import Content from '../components/Content/index';

const Home: NextPage = () => {
  const hi = (x: number): number => x + 1;
  return (
    <div className="body">
      <Title></Title>
      <Content></Content>
    </div>
  );
};

export default Home;
