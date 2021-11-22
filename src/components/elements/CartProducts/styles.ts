import styled, { css } from 'styled-components';

type WrapperProps = {
  openCart: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, openCart }) => css`
    width: 30rem;
    height: 40rem;
    background: ${theme.colors.gray100};
    position: absolute;
    right: 2rem;
    top: 8rem;
    overflow: auto;

    padding: 2rem 1rem;
    border-radius: 0.5rem;

    opacity: ${openCart ? 1 : 0};
    pointer-events: ${openCart ? 'all' : 'none'};
    z-index: 99999;

    > svg {
      color: ${theme.colors.gray500};
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: 1.5rem;
    text-align: center;
    color: ${theme.colors.gray500};
  `}
`;

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;

  img {
    display: block;
    width: 6rem;
    height: 6rem;
  }
`;

export const Content = styled.div`
  padding: 0 1.2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 1rem;

  > button {
    background: transparent;
    margin-top: 1rem;

    border: none;
    outline: none;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: ${({ theme }) => theme.colors.pink};
    }
   
    
    &:hover {
      cursor: pointer;
      filter: brightness(1.2);
    }
  }

  h5,
  p {
    color: ${({ theme }) => theme.colors.gray500};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  font-weight: 600;

  span {
    color: ${({ theme }) => theme.colors.gray500};
  }

  button {
    border: 0;
    outline: 0;
    background: transparent;
    svg {
      display: block;
      color: ${({ theme }) => theme.colors.gray500};
    }
  }
`;

export const Total = styled.div`
  margin-top: 2rem;

  span,
  h4 {
    color: ${({ theme }) => theme.colors.gray500};
    text-align: center;
  }

  span {
    display: block;
  }
`;
