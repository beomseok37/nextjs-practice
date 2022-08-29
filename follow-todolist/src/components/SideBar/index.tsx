import { ReactElement, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import Column from 'src/components/Grid/Column';

import {
  SIDE_BAR_OPEN_WIDTH,
  SIDE_BAR_CLOSE_WIDTH,
} from 'src/constant/sideBar';

import { ButtonWrapper, Button, rotateCSS } from './style';

function SideBar(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Column
      width={isOpen ? SIDE_BAR_OPEN_WIDTH : SIDE_BAR_CLOSE_WIDTH}
      alignItems="center"
      transition
    >
      <ButtonWrapper>
        <Button onClick={handleToggle}>
          <GiHamburgerMenu size={32} css={rotateCSS} />
        </Button>
      </ButtonWrapper>
    </Column>
  );
}

export default SideBar;
