import styled from '@emotion/styled';
import { css } from '@emotion/react';

const MenuDefault = css`
  width: 150px;
  height: 25px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Background = styled.div`
  position: fixed;
  background: #888;
  inset: 0px;
  z-index: 1;
`;

const DropdownMenuWrapper = styled.div`
  animation: growDown 0.25s ease-in-out forwards;
`;

const MenuBase = styled.p`
  ${MenuDefault}
  background: #ccc;
`;

const Menu = styled.p`
  ${MenuDefault}
  background: #eee;
`;

export { Background, DropdownMenuWrapper, MenuBase, Menu };
