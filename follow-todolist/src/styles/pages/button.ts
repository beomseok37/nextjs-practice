import styled from '@emotion/styled';

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
  padding: 10px;
`;

// eslint-disable-next-line import/prefer-default-export
export { ButtonGroup };
