import type { NextPage } from 'next';
import Title from 'src/components/Title';

const Home: NextPage = () => {
  const hi = (x: number): number => x + 1;
  return <Title></Title>;
};

export default Home;
