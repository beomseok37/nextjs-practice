import styled from '@emotion/styled';
import { css } from '@emotion/react';

const MenuDefault = css`
  width: 150px;
  height: 25px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const growDown = css`
  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;

const Background = styled.div`
  position: fixed;
  inset: 0px;
`;

const DropdownMenuWrapper = styled.div`
  z-index: 1;
  width: fit-content;
`;

const MenuBase = styled.p`
  ${MenuDefault}
  border: 1px solid #ccc;
`;

const MenuList = styled.div`
  ${growDown}
  animation: growDown 0.25s ease-in-out forwards;
  transform-origin: top center;
`;

const Menu1 = styled.p`
  ${MenuDefault}
  background: #eee;
`;

const Menu = styled.p`
  ${MenuDefault}
  background: #eee;
`;

export { Background, DropdownMenuWrapper, MenuBase, MenuList, Menu1, Menu2 };
