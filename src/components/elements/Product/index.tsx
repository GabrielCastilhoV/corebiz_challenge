import * as S from './styles';

import starFilled from '../../../assets/icons/starFilled.svg';
import star from '../../../assets/icons/star.svg';

import { ProductProps } from '../../../components/layouts/Home';
import formatPrice from '../../../utils/formatPrice';
import { Button } from '../Button';
import { useCart } from '../../../contexts/Cart';

type IProduct = {
  product: ProductProps;
};

export const Product = ({ product }: IProduct) => {
  const { addProduct } = useCart();

  function handleProductToCart(product: ProductProps) {
    addProduct(product);
  }

  return (
    <S.Wrapper>
      {product.listPrice && <div className="off">OFF</div>}

      <S.Image
        src={product.imageUrl}
        role="img"
        aria-label={product.productName}
      />

      <S.Content>
        <S.Name>{product.productName}</S.Name>

        <S.Rating>
          {Array.from({ length: 5 }, (_, index) => index + 1).map(item => (
            <img
              src={item <= product.stars ? starFilled : star}
              key={item}
              alt={product.productName}
            />
          ))}
        </S.Rating>

        <S.Price>
          <span className="listPrice">
            {product.listPrice ? (
              `de ${formatPrice(product.listPrice)}`
            ) : (
              <br />
            )}
          </span>

          <p>por {formatPrice(product.price)}</p>

          {product.installments.map(installment => (
            <span
              className="installments"
              key={installment.value + installment.quantity}
            >
              ou em {installment.quantity}x de {formatPrice(installment.value)}
            </span>
          ))}

          {product.installments.length === 0 && (
            <span className="installments">&nbsp;</span>
          )}

          <Button
            label="COMPRAR"
            onClick={() => handleProductToCart({ ...product, qtd: 1 })}
          />
        </S.Price>
      </S.Content>
    </S.Wrapper>
  );
};
