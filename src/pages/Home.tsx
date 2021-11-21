import { Header } from '../components/modules/Header';
import { BannerSlider } from '../components/elements/BannerSlider';

import bannersMock from '../components/elements/BannerSlider/mock';

import * as S from '../styles/home';

export const Home = () => {
  return (
    <S.Wrapper>
      <Header />

      <S.SectionBanner>
        <BannerSlider items={bannersMock} />
      </S.SectionBanner>
    </S.Wrapper>
  );
};
