import styled from '@emotion/styled';

interface props {
  rotateY?: string;
  rotateX?: string;
  color: string;
}

const Scene = styled.div`
  width: 300px;
  height: 300px;
  padding: 100px;
  perspective: 400px;
`;

const Rotate = styled.div`
  box-sizing: border-box;
  transform-style: preserve-3d;
`;

const MoveBox = styled.div<props>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  transition: all ease 0.5s;
  ${({ rotateY }) =>
    rotateY &&
    `
  transform: rotateY(${rotateY}deg) translateZ(50px)
  `};
  ${({ rotateX }) =>
    rotateX && `transform: rotateX(${rotateX}deg) translateZ(50px)`};
  background: ${({ color }) => color};
  opacity: 0.7;
`;

export { MoveBox, Rotate, Scene };
