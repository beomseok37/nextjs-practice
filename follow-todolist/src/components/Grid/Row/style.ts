import styled from '@emotion/styled';

interface props {
  width: string;
  height: string;
  justifyContent: string;
  alignItems: string;
}

const Wrapper = styled.div<props>`
  display: flex;

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;

// eslint-disable-next-line import/prefer-default-export
export { Wrapper };
