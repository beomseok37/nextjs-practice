import { NextPage } from 'next';

import MyButton from 'src/components/MyButton';
import AppBlock from 'src/components/AppBlock';
import Header from 'src/components/Header';
import Row from 'src/components/Grid/Row';
import Column from 'src/components/Grid/Column';
import SideBar from 'src/components/SideBar';

import { ButtonGroup } from 'src/styles/pages/button';

const ButtonPage: NextPage = () => {
  return (
    <Row>
      <SideBar />
      <Column>
        <Header pageName="button" />
        <AppBlock>
          <ButtonGroup>
            <MyButton size="large">Button</MyButton>
            <MyButton>Button</MyButton>
            <MyButton size="small">Button</MyButton>
          </ButtonGroup>
          <ButtonGroup>
            <MyButton size="large" color="gray">
              Button
            </MyButton>
            <MyButton color="gray">Button</MyButton>
            <MyButton size="small" color="gray">
              Button
            </MyButton>
          </ButtonGroup>
          <ButtonGroup>
            <MyButton size="large" color="pink">
              Button
            </MyButton>
            <MyButton color="pink">Button</MyButton>
            <MyButton size="small" color="pink">
              Button
            </MyButton>
          </ButtonGroup>
          <ButtonGroup>
            <MyButton size="large" color="pink" outline>
              Button
            </MyButton>
            <MyButton color="pink" outline>
              Button
            </MyButton>
            <MyButton size="small" color="pink" outline>
              Button
            </MyButton>
          </ButtonGroup>
          <ButtonGroup>
            <MyButton size="large" fullWidth>
              Button
            </MyButton>
            <MyButton color="gray" fullWidth>
              Button
            </MyButton>
            <MyButton size="small" color="pink" fullWidth>
              Button
            </MyButton>
          </ButtonGroup>
        </AppBlock>
      </Column>
    </Row>
  );
};
export default ButtonPage;
