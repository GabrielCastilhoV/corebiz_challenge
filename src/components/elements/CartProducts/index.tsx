import * as S from './styles';
import { MdClose } from 'react-icons/md';
import { SetStateAction, useMemo } from 'react';
import { useCart } from '../../../contexts/Cart';
import formatPrice from '../../../utils/formatPrice';

import { ProductProps } from '../../layouts/Home';

import { FiPlus, FiMinus, FiTrash } from 'react-icons/fi';

type CartProductsProps = {
  openCart: boolean;
  setOpenCart: React.Dispatch<SetStateAction<boolean>>;
};

export const CartProducts = ({ openCart, setOpenCart }: CartProductsProps) => {
  const { incrementProduct, decrementProduct, products, removeProduct } =
    useCart();

  const cartTotal = useMemo(() => {
    const total = products?.reduce(
      (sumTotal, { price, qtd }) => sumTotal + price * qtd!,
      0,
    );

    return formatPrice(total);
  }, [products]);

  return (
    <S.Wrapper openCart={openCart}>
      <S.Title>Seu Carrinho</S.Title>
      <MdClose onClick={() => setOpenCart(false)} />

      {products?.map((product: ProductProps) => (
        <S.Container key={product.productId}>
          <img src={product.imageUrl} alt={product.productName} />

          <S.Content>
            <div>
              <h5>{product.productName}</h5>
              <p>{formatPrice(product.price)}</p>
            </div>

            <button onClick={() => removeProduct(product.productId)}>
              <FiTrash />
            </button>
          </S.Content>

          <S.ButtonWrapper>
            <button onClick={() => incrementProduct(product.productId)}>
              <FiPlus />
            </button>
            <span>{product.qtd}</span>

            <button
              onClick={() => decrementProduct(product.productId)}
              disabled={product.qtd === 1}
            >
              <FiMinus />
            </button>
          </S.ButtonWrapper>
        </S.Container>
      ))}

      <S.Total>
        <span>Total</span>
        <h4>{cartTotal}</h4>
      </S.Total>
    </S.Wrapper>
  );
};
