import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    padding-right: .8rem;
    width: 3rem;
    height: 3rem;
  }
`;

export const Text = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray400};
  `}
`;
