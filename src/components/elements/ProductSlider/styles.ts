import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  width: 100%;

  .productSlider {
    position: relative;
    overflow: hidden;
    padding: 0;
  }

  ${({ theme }) => css`
    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.black};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      z-index: 99999;
      transform: translate(0, -50%);
    }
    .slick-prev {
      left: 0;
    }
    .slick-next {
      right: 0;
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;

      position: relative;
      bottom: 0;

      li {
        background: ${theme.colors.gray300};
        width: 1rem;
        height: 1rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0.5rem;
        cursor: pointer;

        &.slick-active {
          background: ${theme.colors.pink};
        }
      }

      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }

    ${media.greaterThan('medium')`
      .slick-dots {
        position: relative;
        bottom: 6rem;
        height: 100%;
        margin: 0;
        li {
          margin: 0 0.5rem;
        }
      }
    `}
  `}
`;
