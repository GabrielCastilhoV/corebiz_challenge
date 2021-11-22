import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type WrapperProps = {
  color: 'black' | 'white';
}

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, color }) => css`
    width: 100%;
    color: ${theme.colors[color]};
    font-size: 2rem;
    font-weight: 900;
    position: relative;
    margin-top: 1rem;

    ${media.greaterThan('medium')`
      font-size: 2.5rem;
    `}

    &:after {
      content: '';
      position: absolute;
      width: 10%;
      height: 0.5rem;
      bottom: -5px;
      left: 0;
      background: ${color === 'black' ? theme.colors.gray200 : theme.colors.white};

      ${media.greaterThan('medium')`
        width: 8%;
    `}
    }
  `}
`;
