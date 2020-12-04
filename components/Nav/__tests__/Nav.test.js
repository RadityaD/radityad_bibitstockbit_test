import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NAV_ROUTES } from '@/constants/index';

describe('<Nav />', () => {
  let Nav;

  const mockFunc = jest.fn().mockImplementation(() => {
    return {
      pathname: '',
      push: () => {},
    };
  });

  beforeAll(() => {
    Nav = require('../index').default;
    jest.mock('next/router', () => {
      const original = jest.requireActual('next/router');
      return {
        ...original,
        useRouter: mockFunc,
      };
    });
  });

  test('Renders correctly', async () => {
    const { findByText } = render(<Nav items={NAV_ROUTES} />);
    expect(await findByText('Movies')).toBeInTheDocument();
    expect(await findByText('Series')).toBeInTheDocument();
  });

  test('Click nav', async () => {
    const { findByText } = render(<Nav items={NAV_ROUTES} />);

    const element = await findByText('Movies');
    fireEvent.click(element);
    expect(mockFunc).toHaveBeenCalled();
  });
});
