/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled';

interface TodoWrapperProps {
  check: boolean;
}

interface IconButtonProps {
  done?: boolean;
  check: boolean;
}

const TodoWrapper = styled.div<TodoWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  width: 300px;
  background: ${({ check }) => (check ? '#fff' : '#eee')};
  border-radius: 20px;
  margin-bottom: 10px;
  transition: all ease 0.8s;
`;

const Title = styled.p`
  width: 240px;
  word-break: break-all;
`;

const IconButton = styled.button<IconButtonProps>`
  width: 20px;
  height: 20px;
  padding: 2px;
  margin-left: 8px;
  background: ${({ done, check }) =>
    done ? (check ? '#bbb' : '#74D19D') : '#e08eb1'};
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px
    ${({ done, check }) => (done ? (check ? '#444' : '#006400') : '#b9062f')};
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: none;
  }
`;

IconButton.defaultProps = {
  done: false,
};

export { Title, TodoWrapper, IconButton };
