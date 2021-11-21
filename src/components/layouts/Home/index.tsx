import { Header } from '../../../components/modules/Header';
import { BannerSlider } from '../../../components/elements/BannerSlider';
import { Heading } from '../../../components/elements/Heading';
import bannersMock from '../../../components/elements/BannerSlider/mock';
import { ProductSlider } from '../../../components/elements/ProductSlider';
import { Newsletter } from '../../../components/elements/Newsletter';

import * as S from './styles';
import { useEffect, useState } from 'react';
import api from '../../../services/api';

type Installment = {
  quantity: number;
  value: number;
};

export type ProductProps = {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice?: number;
  price: number;
  installments: Installment[];
  qtd?: number;
};

export const HomeLayout = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<ProductProps[]>('/products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  return (
    <S.Wrapper>
      <Header />

      <S.SectionBanner>
        <BannerSlider items={bannersMock} />
      </S.SectionBanner>

      <S.ProductWrapper>
        <Heading name="Mais Vendidos" />
        <ProductSlider products={products} />;
      </S.ProductWrapper>

      <Newsletter />
    </S.Wrapper>
  );
};
