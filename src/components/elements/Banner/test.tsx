import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import { Banner } from '.';

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Olá, o que você está buscando?',
  subtitle: 'Criar ou migrar seu e-commerce?',
};

describe('<Banner />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Banner {...props} />);

    expect(
      screen.getByRole('heading', { name: /Olá, o que você está buscando?/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Criar ou migrar seu e-commerce?/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /Olá, o que você está buscando?/i }),
    ).toBeInTheDocument();
  });
});
