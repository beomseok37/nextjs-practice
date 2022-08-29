import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
`;

const Button = styled.button`
  padding: 5px;
  border: 1px solid #888;
  border-radius: 4px;
`;

const rotateCSS = css`
  &:hover {
    transform: rotate(0.1turn);
    transition: all ease 0.5s;
  }
  transition: all ease 0.5s;
`;

export { ButtonWrapper, Button, rotateCSS };
