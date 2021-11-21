import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../utils/tests/helpers';

import { Cart } from '.';

describe('<Cart />', () => {
  it('should render the cart', () => {
    renderWithTheme(<Cart />);

    expect(screen.getByLabelText(/Open cart/i)).toBeInTheDocument();
  });
});
