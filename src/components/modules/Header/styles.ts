import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 100%;
  height: 8rem;
  background: ${({ theme }) => theme.colors.white};

  position: fixed;
  z-index: 999;
  top: 0;
`;

export const Content = styled.header`
  max-width: 130rem;
  height: 100%;
  margin: 0 auto;
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: space-between;

  ${media.greaterThan('medium')`
    padding: 2rem;
  `}

  img {
    width: 10rem;

    ${media.greaterThan('medium')`
      width: 15rem;
    `}
  }
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${theme.colors.black};
      cursor: pointer;
      width: 3rem;
      height: 3rem;
    }
  `}
`;

type MenuFullProps = {
  isOpen: boolean;
};

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 1rem 2rem;

    height: 100vh;
    position: absolute;
    top: 1rem;
    bottom: 0;
    left: 0;
    right: 1rem;
    background: ${theme.colors.white};

    overflow: hidden;
    transition: 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    img {
      width: 10rem;
    }

    > svg {
      color: ${theme.colors.black};
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
