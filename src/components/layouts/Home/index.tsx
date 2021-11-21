import { Header } from '../../../components/modules/Header';
import { BannerSlider } from '../../../components/elements/BannerSlider';
import { Heading } from '../../../components/elements/Heading';
import bannersMock from '../../../components/elements/BannerSlider/mock';

import * as S from './styles';

export const HomeLayout = () => {
  return (
    <S.Wrapper>
      <Header />

      <S.SectionBanner>
        <BannerSlider items={bannersMock} />
      </S.SectionBanner>

      <S.ProductWrapper>
        <Heading name="Mais Vendidos" />
      </S.ProductWrapper>
    </S.Wrapper>
  );
};
