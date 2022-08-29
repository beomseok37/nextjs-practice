import { ReactElement, ReactNode } from 'react';

import { Wrapper } from './style';

interface props {
  children: ReactNode;
  width?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
  transition?: boolean;
}

function Column({
  children,
  width,
  height,
  justifyContent,
  alignItems,
  transition,
}: props): ReactElement {
  return (
    <Wrapper
      width={width!}
      height={height!}
      justifyContent={justifyContent!}
      alignItems={alignItems!}
      transition={transition!}
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
};

export default Column;
