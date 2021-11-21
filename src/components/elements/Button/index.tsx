import * as S from './styles';

import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  color?: 'black' | 'white';
};

export const Button = ({ label, color = 'black', ...rest }: ButtonProps) => {
  return (
    <S.Wrapper color={color} {...rest}>
      {label}
    </S.Wrapper>
  );
};
