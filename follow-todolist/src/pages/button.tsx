import { NextPage } from 'next';

import Button from 'src/components/base/Button';
import AppBlock from 'src/components/AppBlock';
import Header from 'src/components/Header';
import Row from 'src/components/Grid/Row';
import Column from 'src/components/Grid/Column';
import SideBar from 'src/components/SideBar';
import PageContent from 'src/components/PageContent';

import { BUTTON_PAGE_CONTENT } from 'src/constant/page';

import { ButtonGroup } from 'src/styles/pages';

const ButtonPage: NextPage = () => {
  return (
    <Row height="100%" width="100%">
      <SideBar />
      <Column width="100%">
        <Header pageName="button" />
        <PageContent content={BUTTON_PAGE_CONTENT} done />
        <AppBlock>
          <ButtonGroup>
            <Button size="large">Button</Button>
            <Button>Button</Button>
            <Button size="small">Button</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large" color="gray">
              Button
            </Button>
            <Button color="gray">Button</Button>
            <Button size="small" color="gray">
              Button
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large" color="pink">
              Button
            </Button>
            <Button color="pink">Button</Button>
            <Button size="small" color="pink">
              Button
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large" color="pink" outline>
              Button
            </Button>
            <Button color="pink" outline>
              Button
            </Button>
            <Button size="small" color="pink" outline>
              Button
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large" fullWidth>
              Button
            </Button>
            <Button color="gray" fullWidth>
              Button
            </Button>
            <Button size="small" color="pink" fullWidth>
              Button
            </Button>
          </ButtonGroup>
        </AppBlock>
      </Column>
    </Row>
  );
};
export default ButtonPage;
