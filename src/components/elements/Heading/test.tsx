import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../utils/tests/helpers';
import { Heading } from '.';

describe('<Heading />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Heading name="Mais Vendidos" />);

    expect(
      screen.getByRole('heading', { name: /Mais Vendidos/i }),
    ).toBeInTheDocument();
  });
});
