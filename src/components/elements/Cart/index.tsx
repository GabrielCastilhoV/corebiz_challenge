import * as S from './styles';

import { BsCart4 } from 'react-icons/bs';

import { useCart } from '../../../contexts/Cart';
import { SetStateAction, useEffect, useState } from 'react';

type CartProps = {
  setOpenCart: React.Dispatch<SetStateAction<boolean>>;
};

export const Cart = ({ setOpenCart }: CartProps) => {
  const { products } = useCart();

  const [qtd, setQtd] = useState(0);

  useEffect(() => {
    const total = products?.reduce((sumTotal, { qtd }) => sumTotal + qtd!, 0);
    setQtd(total);
  }, [products]);

  return (
    <S.Wrapper aria-label="Open cart" onClick={() => setOpenCart(true)}>
      <BsCart4 />

      {qtd > 0 && <S.Count>{qtd}</S.Count>}
    </S.Wrapper>
  );
};
