import React from 'react';
import { render, fireEvent } from '@testing-library/react';

const mockProps = {
  title: 'film radit',
  year: '2077',
  id: '12345',
};

describe('<Poster />', () => {
  let Poster;

  const mockPush = jest.fn();
  const mockRouter = jest.fn().mockImplementation(() => {
    return {
      pathname: '',
      push: mockPush,
    };
  });

  beforeEach(() => {
    Poster = require('../index').default;
    jest.mock('react-tooltip', () => () => {
      return <></>;
    });
    jest.mock('next/router', () => {
      const original = jest.requireActual('next/router');
      return {
        ...original,
        useRouter: mockRouter,
      };
    });
  });

  test('Renders correctly', () => {
    const { container } = render(<Poster {...mockProps} />);
    expect(container).toBeInTheDocument();
  });

  test('Title and year is rendered', async () => {
    const { findByText } = render(<Poster {...mockProps} />);
    const title = await findByText(mockProps.title);
    const year = await findByText(`(${mockProps.year})`);

    expect(title).toBeInTheDocument();
    expect(year).toBeInTheDocument();
  });

  test('Action buttons is rendered', async () => {
    const { findByTestId } = render(<Poster {...mockProps} />);
    const posterViewButton = await findByTestId('btnPosterView');
    const detailButton = await findByTestId('btnLihatDetail');

    expect(posterViewButton).toBeInTheDocument();
    expect(detailButton).toBeInTheDocument();
  });

  test('If in detail page, button detail is not rendered', () => {
    const { queryByTestId } = render(<Poster {...mockProps} layout="detail" />);
    const detailButton = queryByTestId('btnLihatDetail');

    expect(detailButton).not.toBeInTheDocument();
  });

  test('Mouse enter and leave', () => {
    const { queryByTestId } = render(<Poster {...mockProps} />);

    const element = queryByTestId('containerNotHovered');
    expect(element).toBeInTheDocument();

    fireEvent.mouseEnter(element);
    const elementHovered = queryByTestId('containerIsHovered');
    expect(elementHovered).toBeInTheDocument();

    fireEvent.mouseLeave(elementHovered);
    const elementMouseLeave = queryByTestId('containerNotHovered');
    expect(elementMouseLeave).toBeInTheDocument();
  });

  test('Test action buttons functions', async () => {
    const { findByTestId } = render(<Poster {...mockProps} />);
    const posterViewButton = await findByTestId('btnPosterView');
    const detailButton = await findByTestId('btnLihatDetail');

    expect(posterViewButton).toBeInTheDocument();
    expect(detailButton).toBeInTheDocument();

    fireEvent.click(detailButton);
    expect(mockPush).toHaveBeenCalledTimes(1);

    fireEvent.click(posterViewButton);
    const modalEl = await findByTestId('modalShown');
    expect(modalEl).toBeInTheDocument();
  });
});
