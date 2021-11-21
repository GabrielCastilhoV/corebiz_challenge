import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as ButtonStyles from '../Button/styles';
import * as InputStyles from '../Input/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.gray100};

    padding: 2rem;

    ${media.greaterThan('medium')`
      padding: 3rem 2rem;
    `}

    h2 {
      color: ${theme.colors.gray500};
      font-size: 2.2rem;
      text-align: center;
    }

    .subscribed {
      width: 100%;
      max-width: 40rem;
      margin: 0 auto;

      h2 {
        font-size: 1.8rem;
        color: ${theme.colors.black};
      }

      p {
        color: ${theme.colors.gray500};
        font-size: 1.5rem;
        text-align: center;
      }

      ${ButtonStyles.Wrapper} {
        width: 100%;
      }
    }

    form {
      width: 100%;
      max-width: 70rem;
      margin: 2rem auto;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;

      ${media.greaterThan('medium')`
        flex-direction: row;
        margin-top: 2rem;

        ${ButtonStyles.Wrapper} {
          width: 14rem;
          margin: 0;
        }
        
        ${InputStyles.Wrapper} {
          width: 28rem;
        }
      `}
    }
  `}
`;
