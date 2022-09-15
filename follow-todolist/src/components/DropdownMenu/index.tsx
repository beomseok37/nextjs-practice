import {
  Dispatch,
  MouseEvent,
  ReactElement,
  SetStateAction,
  useRef,
  useState,
} from 'react';

import { Background, DropdownMenuWrapper, MenuBase, Menu } from './style';

interface props {
  bind: [string, Dispatch<SetStateAction<string>>];
  menuList: string[];
}

function DropdownMenu({ bind, menuList }: props): ReactElement {
  const [menuState, setMenuState] = bind;
  const [dropdown, setDropdown] = useState(false);
  const menuBaseRef = useRef<HTMLDivElement>(null);
  const handleClickBase = () => {
    setDropdown(!dropdown);
  };
  const handleCloseDropdownMenu = () => {
    setDropdown(false);
  };
  const handleClickMenu = (e: MouseEvent<HTMLParagraphElement>) => {
    setMenuState(e.currentTarget.innerText);
  };

  return (
    <DropdownMenuWrapper>
      <MenuBase onClick={handleClickBase} ref={menuBaseRef}>
        {menuState}
      </MenuBase>
      {dropdown && (
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
