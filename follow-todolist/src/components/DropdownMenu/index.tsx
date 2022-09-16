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
        <>
          <Background onClick={handleCloseDropdownMenu} />
          {menuList.map((menu, index) => (
            <Menu key={menu + index.toString()} onClick={handleClickMenu}>
              {menu}
            </Menu>
          ))}
        </>
      )}
    </DropdownMenuWrapper>
  );
}

export default DropdownMenu;
