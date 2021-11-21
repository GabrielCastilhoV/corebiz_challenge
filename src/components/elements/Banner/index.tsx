import * as S from './styles';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
};

export const Banner = ({ img, title, subtitle }: BannerProps) => (
  <S.Wrapper>
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Caption>

    <S.Image src={img} role="img" aria-label={title} />
  </S.Wrapper>
);
