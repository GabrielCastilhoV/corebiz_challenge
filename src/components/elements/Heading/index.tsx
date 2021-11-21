import * as S from './styles';

type HeadingProps = {
  name: string;
};

export const Heading = ({ name }: HeadingProps) => {
  return <S.Wrapper>{name}</S.Wrapper>;
};
