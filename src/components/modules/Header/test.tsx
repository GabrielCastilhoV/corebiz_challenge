import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '../../../utils/tests/helpers';

import { Header } from '.';

describe('<Header />', () => {
  it('should render the header', () => {
    renderWithTheme(<Header />);

    expect(screen.getByRole('img', { name: /Logo/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Open Menu/i)).toBeInTheDocument();
  });

  it('should render the open/close mobile menu', () => {
    renderWithTheme(<Header />);

    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });

    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });
});
