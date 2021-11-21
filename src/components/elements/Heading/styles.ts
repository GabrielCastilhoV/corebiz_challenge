import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.h2`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.black};
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
      background: ${theme.colors.gray200};

      ${media.greaterThan('medium')`
        width: 8%;
    `}
    }
  `}
`;
