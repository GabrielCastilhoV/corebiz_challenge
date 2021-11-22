import styled from 'styled-components';
import media from 'styled-media-query';
import * as HeadingStyles from '../../elements/Heading/styles';
import * as ButtonStyles from '../../elements/Button/styles';

export const Wrapper = styled.footer`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.black};

  ${media.greaterThan('medium')`
    height: 21rem;
  `}
`;

export const Content = styled.div`
  max-width: 130rem;
  height: 100%;
  margin: 0 auto;
  padding: 2rem;

  ${media.greaterThan('medium')`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Location = styled.div`
  ${HeadingStyles.Wrapper} {
   

    &:after {
      bottom: -20px;

      ${media.greaterThan('medium')`
        bottom: -15px;
      `}
    }
  }

  .first {
    margin-top: 4rem;

    ${media.greaterThan('medium')`
      margin-top: 3rem;
    `}
  }

  p {
    line-height: 3rem;

    ${media.greaterThan('medium')`
    line-height: 2.5rem;
    `}
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 80%;
  margin: 2rem auto 0;

  ${ButtonStyles.Wrapper} {
    font-size: 1.3rem;
    font-weight: 500;
  }

  ${media.greaterThan('medium')`
    gap: 2rem;

    ${ButtonStyles.Wrapper} {
      width: 20rem;
    }
  `}
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-top: 2rem;

  > div {
    width: 50%;
    text-align: center;
  }
  span {
    display: block;
    font-size: 1rem;
  }

  ${media.greaterThan('medium')`
    width: 15%;
  `}
`;
