import * as S from './styles';

import { BsCart4 } from 'react-icons/bs';

export const Cart = () => {
  return (
    <S.Wrapper aria-label="Open cart">
      <BsCart4 />

      <S.Count>1</S.Count>
    </S.Wrapper>
  );
};
