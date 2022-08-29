import { NextPage } from 'next';
import React, { useState } from 'react';

import Box from 'src/components/Box';
import CheckBox from 'src/components/CheckBox';
import Header from 'src/components/Header';
import Row from 'src/components/Grid/Row';
import Column from 'src/components/Grid/Column';
import SideBar from 'src/components/SideBar';

import { Check } from 'src/styles/pages';

const BoxPage: NextPage = () => {
  const [check, setCheck] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.currentTarget.checked);
  };
  return (
    <Row>
      <SideBar />
      <Column>
        <Header pageName="box" />
        <Box />
        <CheckBox onChange={handleChange} checked={check}>
          다음 약관에 모두 동의
        </CheckBox>
        <Check>
          check:
          {check ? 'true' : 'false'}
        </Check>
      </Column>
    </Row>
  );
};

export default BoxPage;
