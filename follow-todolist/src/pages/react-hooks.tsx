import { NextPage } from 'next';

import Row from 'src/components/Grid/Row';
import Column from 'src/components/Grid/Column';
import SideBar from 'src/components/SideBar';
import Header from 'src/components/Header';
import PageContent from 'src/components/PageContent';
import AppWithUseMemo from 'src/components/practice-hook/with-useMemo/App';
import AppWithoutUseMemo from 'src/components/practice-hook/without-useMemo/App';
import AppWithUseCallback from 'src/components/practice-hook/with-useCallback/App';
import AppWithoutUseCallback from 'src/components/practice-hook/without-useCallback/App';

import { REACT_HOOKS_PAGE_CONTENT } from 'src/constant/page';

import { SubTitle } from 'src/styles/pages/react-hooks';

const ReactHooks: NextPage = () => {
  return (
    <Row height="100%" width="100%">
      <SideBar />
      <Column width="100%" justifyContent="flex-start">
        <Header pageName="box" />
        <PageContent content={REACT_HOOKS_PAGE_CONTENT} />
        <Row justifyContent="space-around">
          <Column alignItems="center">
            <SubTitle>useMemo</SubTitle>
            <AppWithUseMemo />
          </Column>
          <Column alignItems="center">
            <SubTitle>without useMemo</SubTitle>
            <AppWithoutUseMemo />
          </Column>
        </Row>
        <Row justifyContent="space-around">
          <Column alignItems="center">
            <SubTitle>useCallback</SubTitle>
            <AppWithUseCallback />
          </Column>
          <Column alignItems="center">
            <SubTitle>without useCallback</SubTitle>
            <AppWithoutUseCallback />
          </Column>
        </Row>
      </Column>
    </Row>
  );
};

export default ReactHooks;
