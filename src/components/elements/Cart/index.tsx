import * as S from './styles';

import { BsCart4 } from 'react-icons/bs';

import { useCart } from '../../../contexts/Cart';

export const Cart = () => {
  const { qtd } = useCart();

  return (
    <S.Wrapper aria-label="Open cart">
      <BsCart4 />

      {qtd > 0 && <S.Count>{qtd}</S.Count>}
    </S.Wrapper>
  );
};
