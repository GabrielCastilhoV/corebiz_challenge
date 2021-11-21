import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../utils/tests/helpers';

import { Search } from '.';

describe('<Search />', () => {
  it('should render the search', () => {
    renderWithTheme(<Search />);

    expect(screen.getByLabelText(/Search Product/i)).toBeInTheDocument();
  });
});
