import styled from '@emotion/styled';

interface props {
  state: number;
}

const MoveBox = styled.div<props>`
  width: 100px;
  height: 100px;
  background: red;
  transition: all ease 0.5s;
  ${({ state }) =>
    `
  transform: rotateY(${state.toString()}deg) translateX(100px);
  `}
`;

// eslint-disable-next-line import/prefer-default-export
export { MoveBox };
