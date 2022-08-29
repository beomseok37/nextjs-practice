import { ReactElement, ReactNode } from 'react';

import { Wrapper } from './style';

interface props {
  children: ReactNode;
  width?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
}

function Row({
  children,
  width,
  height,
  justifyContent,
  alignItems,
}: props): ReactElement {
  return (
    <Wrapper
      width={width!}
      height={height!}
      justifyContent={justifyContent!}
      alignItems={alignItems!}
    >
      {children}
    </Wrapper>
  );
}

Row.defaultProps = {
  width: '100%',
  height: '100%',
  justifyContent: 'unset',
  alignItems: 'unset',
};

export default Row;
