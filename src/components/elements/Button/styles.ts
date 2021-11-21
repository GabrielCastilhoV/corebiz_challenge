import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type ButtonProps = {
  color: 'black' | 'white';
}

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, color }) => css`
    background: ${theme.colors[color]};
    color: #fff;
    
    border: 0;
    border-radius: 0.5rem;

    width: 100%;
    height: 4.8rem;
    margin-top: 1rem;
    
    font-weight: 700;
    font-size: 1.5rem;
    font-family: 'Lato', sans-serif;

    transition: all 0.3s;

    &:hover {
      cursor: pointer;
     background: ${theme.colors.gray500};
    }

    ${media.greaterThan('medium')`
      width: 14rem;
      padding: 0 1rem;
    `}
  `}
`;
