import * as S from './styles';

import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  color?: 'black' | 'white';
  icon?: React.ReactNode;
  nameWithHtml?: string;
};

export const Button = ({
  label,
  color = 'black',
  icon,
  nameWithHtml,
  ...rest
}: ButtonProps) => {
  return (
    <S.Wrapper color={color} {...rest}>
      {!!icon && icon}
      {!!nameWithHtml && (
        <span dangerouslySetInnerHTML={{ __html: nameWithHtml }}></span>
      )}
      {label}
    </S.Wrapper>
  );
};
