import styled from '@emotion/styled';

import { SideBarColorType } from 'src/types';

interface props {
  width: string;
  height: string;
  justifyContent: string;
  alignItems: string;
  transition: boolean;
  background: SideBarColorType;
}

const Wrapper = styled.div<props>`
  display: flex;
  flex-direction: column;

  width: ${({ width }) => width};
  height: ${({ height }) => height}
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  ${({ transition }) => transition && `transition: all ease 0.8s;`}
  background: ${({ theme, background }) => theme.backgroundColors[background]}
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
