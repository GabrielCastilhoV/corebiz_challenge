import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.label`
  ${({ theme }) => css`
    width: 100%;
    max-width: 71rem;

    height: 2rem;
    position: relative;
    margin-top: 1rem;

    ${media.greaterThan('medium')`
      margin-top: 0;
    `}

    svg {
      width: 1.8rem;
      height: 1.8rem;
      color: ${theme.colors.black};

      position: absolute;
      bottom: 0;
      right: 0;

      &:hover {
        cursor: pointer;
      }
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: 0.5rem;

    border: none;
    outline: none;
    border-bottom: 1px solid ${theme.colors.gray400};

    &,
    &::placeholder {
      color: ${theme.colors.gray400};
    }
  `}
`;
