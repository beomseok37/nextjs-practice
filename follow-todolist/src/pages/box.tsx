import { NextPage } from 'next';
import React, { useState } from 'react';

import Box from 'src/components/Box';
import CheckBox from 'src/components/CheckBox';
import Header from 'src/components/header';

import { Check } from 'src/styles/pages/box';

const BoxPage: NextPage = () => {
  const [check, setCheck] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.currentTarget.checked);
  };
  return (
    <>
      <Header pageName="home" />
      <Box />
      <CheckBox onChange={handleChange} checked={check}>
        다음 약관에 모두 동의
      </CheckBox>
      <Check>
        check:
        {check ? 'true' : 'false'}
      </Check>
    </>
  );
};

export default BoxPage;
