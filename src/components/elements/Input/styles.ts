import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  input {
    ${({ theme }) => css`
      width: 100%;
      height: 5rem;
      padding: 1rem;

      border: none;
      border-radius: 0.5rem;
      background: ${theme.colors.white};

      &,
      &::placeholder {
        color: ${theme.colors.gray500};
        font-size: 1.3rem;
        font-weight: 600;
      }
    `}
  }

  span {
    display: block;
    font-size: 1.2rem;
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.pink};
  }
`;
