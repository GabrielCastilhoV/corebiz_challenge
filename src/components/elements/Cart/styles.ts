import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
  background: none;
  outline: none;
  border: none;
  cursor: pointer;

  ${media.greaterThan('medium')`
    order: 4;
  `}

  svg {
    color: ${({ theme }) => theme.colors.black};
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
  }
`;

export const Count = styled.span`
  ${({ theme }) => css`
    background: ${theme.colors.pink};
    border-radius: 50%;
    width: 2rem;
    height: 2.1rem;

    font-size: 1.3rem;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
