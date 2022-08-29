import { ReactElement, ReactNode } from 'react';

import { SideBarColorType } from 'src/types';

import { Wrapper } from './style';

interface props {
  children: ReactNode;
  width?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
  transition?: boolean;
  background?: SideBarColorType;
}

function Column({
  children,
  width,
  height,
  justifyContent,
  alignItems,
  transition,
  background,
}: props): ReactElement {
  return (
    <Wrapper
      width={width!}
      height={height!}
      justifyContent={justifyContent!}
      alignItems={alignItems!}
      transition={transition!}
      background={background!}
    >
      {children}
    </Wrapper>
  );
}

Column.defaultProps = {
  width: '100%',
  height: '100%',
  justifyContent: 'unset',
  alignItems: 'unset',
  transition: false,
  background: 'unset',
};

export default Column;
