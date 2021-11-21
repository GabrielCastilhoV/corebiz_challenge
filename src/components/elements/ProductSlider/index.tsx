import { Product } from '../Product';
import Slider, { SliderSettings } from '../Slider';
import { ProductProps } from '../../layouts/Home';

import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

import * as S from './styles';

export type ProductSliderProps = {
  products: ProductProps[];
};

const settings: SliderSettings = {
  dots: false,
  speed: 500,
  className: 'productSlider',
  lazyLoad: 'ondemand',
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  nextArrow: <MdOutlineArrowForwardIos aria-label="next product" />,
  prevArrow: <MdOutlineArrowBackIos aria-label="previous product" />,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
};

export const ProductSlider = ({ products }: ProductSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {products.map(product => (
        <Product key={product.productId} product={product} />
      ))}
    </Slider>
  </S.Wrapper>
);
