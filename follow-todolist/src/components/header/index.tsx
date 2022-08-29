import { ReactElement } from 'react';
import Router from 'next/router';
import MyButton from 'src/components/MyButton';

import { Wrapper, Title } from './style';

interface props {
  pageName: string;
}

const Header = ({ pageName }: props): ReactElement => {
  const handleClick = () => {
    Router.back();
  };
  return (
    <Wrapper>
      <Title>cotton's {pageName} page</Title>
      <MyButton size="small" onClick={handleClick}>
        return
      </MyButton>
    </Wrapper>
  );
};

export default Header;
