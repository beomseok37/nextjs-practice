import type { NextPage } from 'next';

import Header from 'src/components/Header';
import SideBar from 'src/components/SideBar';
import Row from 'src/components/Grid/Row';
import Column from 'src/components/Grid/Column';
import ReduxCounter from 'src/components/ReduxCounter';
import PageContent from 'src/components/PageContent';

import { REDUX_PAGE_CONTENT } from 'src/constant/page';

const Redux: NextPage = () => {
  return (
    <Row height="100%" width="100%">
      <SideBar />
      <Column width="100%">
        <Header pageName="Redux" />
        <p>이 페이지는 Redux를 공부하기 위한 페이지이다.</p>
        <PageContent content={REDUX_PAGE_CONTENT} />
        <ReduxCounter />
      </Column>
    </Row>
  );
};

export default Redux;
