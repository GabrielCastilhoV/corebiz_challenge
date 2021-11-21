import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;

      position: relative;
      bottom: 2rem;

      li {
        background: ${theme.colors.white};
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
`