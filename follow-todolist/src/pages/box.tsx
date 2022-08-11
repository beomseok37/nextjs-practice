import { NextPage } from 'next';

import Box from 'src/components/Box';
import Header from 'src/components/header';

const BoxPage: NextPage = () => {
  return (
    <>
      <Header pageName="home" />
      <Box />;
    </>
  );
};

export default BoxPage;
