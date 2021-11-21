import styled from 'styled-components';
import media from 'styled-media-query';

import banner from '../../../assets/images/bannerBlack.svg';

export const Wrapper = styled.div`
  width: 100%;
  height: 19rem;
  margin-top: 7rem;

  background: ${({ theme }) => theme.colors.gray500};
  position: relative;
  display: flex;
  align-items: center;

  ${media.greaterThan('medium')`
    height: 43rem;
    margin-top: 5.5rem;

    &:after {
      background: url(${banner}) no-repeat top right;
      content: '';
      width: 50%;
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
    } 
  `}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.5;

  ${media.greaterThan('medium')`
    width: 55%;
    height: 100%;
    opacity: 0.6;
    right: 0;
    top: 0;
  `}
`;

export const Caption = styled.div`
  height: 100%;
  padding: 2rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.greaterThan('medium')`
    align-items: center;
  `};
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 2rem;

  ${media.greaterThan('medium')`
    font-size: 3rem;
    width: 60%;
    padding-left: 0.3rem;
  `}
`;

export const Subtitle = styled.h3`
  font-size: 3rem;
  font-weight: 900;
  line-height: 3rem;

  ${media.greaterThan('medium')`
    line-height: 5rem;
    width: 60%;
    font-size:4.5rem;
  `}
`;
