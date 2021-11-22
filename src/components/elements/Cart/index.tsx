import * as S from './styles';

import { BsCart4 } from 'react-icons/bs';

import { useCart } from '../../../contexts/Cart';
import { SetStateAction } from 'react';

type CartProps = {
  setOpenCart: React.Dispatch<SetStateAction<boolean>>;
};

export const Cart = ({ setOpenCart }: CartProps) => {
  const { qtd } = useCart();

  return (
    <S.Wrapper aria-label="Open cart" onClick={() => setOpenCart(true)}>
      <BsCart4 />

      {qtd > 0 && <S.Count>{qtd}</S.Count>}
    </S.Wrapper>
  );
};
