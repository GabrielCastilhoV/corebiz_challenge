import * as S from './styles';

type HeadingProps = {
  name: string;
  color?: 'black' | 'white';
};

export const Heading = ({ name, color = 'black' }: HeadingProps) => {
  return <S.Wrapper color={color}>{name}</S.Wrapper>;
};
