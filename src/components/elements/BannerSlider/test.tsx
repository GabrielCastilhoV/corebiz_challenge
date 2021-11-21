import 'match-media-mock';
import { screen } from '@testing-library/react';

import { BannerSlider } from '.';
import { renderWithTheme } from 'utils/tests/helpers';

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Olá, o que você está buscando?',
    subtitle: 'Criar ou migrar seu e-commerce?',
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'Olá, o que você está buscando 2?',
    subtitle: 'Criar ou migrar seu e-commerce?',
  },
];

describe('<BannerSlider />', () => {
  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2);
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1);

    expect(
      screen.getByRole('heading', {
        name: /Olá, o que você está buscando?/i,
        hidden: false,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /Olá, o que você está buscando 2?/i,
        hidden: true,
      }),
    ).toBeInTheDocument();
  });

  it('should render a the dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />);

    expect(container.querySelector('.slick-dots')).toBeInTheDocument();
  });
});
