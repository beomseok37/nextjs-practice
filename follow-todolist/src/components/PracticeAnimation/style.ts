import styled from '@emotion/styled';

interface props {
  rotateY?: string;
  rotateX?: string;
  rotateZ?: string;
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
  ${({ rotateY, rotateX }) =>
    rotateY &&
    rotateX &&
    `
  transform: rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(50px)
  `};
  ${({ rotateX, rotateZ }) =>
    rotateX &&
    rotateZ &&
    `transform: rotateX(${rotateX}deg) rotateZ(${rotateZ}deg) translateZ(50px)`};
  background: ${({ color }) => color};
  opacity: 0.8;
`;

export { MoveBox, Rotate, Scene };