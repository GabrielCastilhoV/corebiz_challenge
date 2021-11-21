import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as ButtonStyles from '../Button/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 5rem;
    position: relative;

    .off {
      position: absolute;
      z-index: 999;
      top: 0;
      right: 0;
      width: 5.1rem;
      height: 4.4rem;
      padding: 0.8rem 0.4rem 0 0;

      background: ${theme.colors.pink};
      color: ${theme.colors.white};

      font-size: 1rem;
      font-weight: 600;
      text-align: right;

      -webkit-clip-path: polygon(0 0, 100% 100%, 100% 0%, 0% -100%);
      clip-path: polygon(0 0, 100% 100%, 100% 0%, 0% -100%);
    }

    ${media.greaterThan('medium')`
      max-width: 25rem;
    `}
  `}
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const Content = styled.div`
  height: 100%;
  padding: 2rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: all 0.3s;

  ${media.greaterThan('medium')`
    align-items: center;

    ${ButtonStyles.Wrapper} {
      opacity: 0;
      visibility: hidden;
    }

    &:hover {
      background-color: #E6E8EA;

      ${ButtonStyles.Wrapper} {
        opacity: 1;
        visibility: visible;
      }
    }
  `};
`;

export const Name = styled.p`
  ${({ theme }) => css`
    height: 2rem;
    display: block;
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
    color: ${theme.colors.gray400};

    ${media.greaterThan('medium')`
      font-size: 1.2rem;
    `}
  `}
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.6rem;

  ${media.greaterThan('medium')`
    margin-top: 0.8rem;
  `}
`;

export const Price = styled.div`
  width: 100%;
  text-align: center;

  ${({ theme }) => css`
    .listPrice {
      display: block;
      margin-top: 0.7rem;
      color: ${theme.colors.gray400};

      text-decoration-line: line-through;
      font-size: 1.1rem;

      ${media.greaterThan('medium')`
        font-size: 1.3rem;
    ` }
    }

    p {
      display: block;
      color: ${theme.colors.black};
      font-weight: 700;
      margin: 0.7rem 0 1rem 0;

      ${media.greaterThan('medium')`
        font-size: 1.5rem;
    ` }
    }

    .installments {
      display: block;
      font-size: 1.1rem;
      color: ${theme.colors.gray400};

      ${media.greaterThan('medium')`
        font-size: 1.3rem;
    ` }
    }
  `}
`;
