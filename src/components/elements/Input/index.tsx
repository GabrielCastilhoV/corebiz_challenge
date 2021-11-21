import * as S from './styles';

import {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';

import { FieldError } from 'react-hook-form';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  error?: FieldError;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error = null, ...rest },
  ref,
) => {
  return (
    <S.Wrapper>
      <input id={name} name={name} ref={ref} {...rest} />
      {!!error && <span>{error.message}</span>}
    </S.Wrapper>
  );
};

export const Input = forwardRef(InputBase);
