import type { NextPage } from 'next';

import Header from 'src/components/Header';
import SideBar from 'src/components/SideBar';
import Row from 'src/components/Grid/Row';
import Column from 'src/components/Grid/Column';

const Home: NextPage = () => {
  return (
    <Row height="100%" width="100%">
      <SideBar />
      <Column width="100%">
        <Header pageName="home" />
        <p>이 블로그는 frontend의 여러 기술들을 연습하기 위한 사이트이다.</p>
      </Column>
    </Row>
  );
};

export default Home;
