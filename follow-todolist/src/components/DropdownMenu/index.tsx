import {
  Dispatch,
  MouseEvent,
  ReactElement,
  SetStateAction,
  useRef,
  useState,
} from 'react';

import Row from 'src/components/Grid/Row';

import {
  Background,
  DropdownMenuWrapper,
  MenuBase,
  MenuList,
  Menu1,
  Menu2,
} from './style';

interface props {
  bind: [string, Dispatch<SetStateAction<string>>];
  menuList: string[];
}

function DropdownMenu({ bind, menuList }: props): ReactElement {
  const [menuState, setMenuState] = bind;
  const [isDropdown1, setIsDropdown1] = useState(false);
  const [isDropdown2, setIsDropdown2] = useState(false);
  const menuBaseRef = useRef<HTMLDivElement>(null);
  const handleClickBase1 = () => {
    setIsDropdown1(!isDropdown1);
    if (isDropdown2) {
      setIsDropdown2(false);
    }
  };
  const handleCloseDropdownMenu1 = () => {
    setIsDropdown1(false);
  };
  const handleClickMenu1 = (e: MouseEvent<HTMLParagraphElement>) => {
    setMenuState(e.currentTarget.innerText);
    setIsDropdown1(false);
  };
  const handleClickBase2 = () => {
    setIsDropdown2(!isDropdown2);
    if (isDropdown1) {
      setIsDropdown1(false);
    }
  };
  const handleCloseDropdownMenu2 = () => {
    setIsDropdown2(false);
  };
  const handleClickMenu2 = (e: MouseEvent<HTMLParagraphElement>) => {
    setMenuState(e.currentTarget.innerText);
    setIsDropdown2(false);
  };

  return (
    <Row width="600px" justifyContent="space-around">
      {isDropdown1 && <Background onClick={handleCloseDropdownMenu1} />}
      <DropdownMenuWrapper>
        <MenuBase onClick={handleClickBase1} ref={menuBaseRef}>
          {menuState}
        </MenuBase>
        {isDropdown1 && (
          <MenuList>
            {menuList.map((menu, index) => (
              <Menu1 key={menu + index.toString()} onClick={handleClickMenu1}>
                {menu}
              </Menu1>
            ))}
          </MenuList>
        )}
      </DropdownMenuWrapper>
      {isDropdown2 && <Background onClick={handleCloseDropdownMenu2} />}
      <DropdownMenuWrapper>
        <MenuBase onClick={handleClickBase2} ref={menuBaseRef}>
          {menuState}
        </MenuBase>
        {isDropdown2 && (
          <>
            {menuList.map((menu, index) => (
              <Menu2
                key={menu + index.toString()}
                index={index}
                onClick={handleClickMenu2}
              >
                {menu}
              </Menu2>
            ))}
          </>
        )}
      </DropdownMenuWrapper>
    </Row>
  );
}

export default DropdownMenu;
