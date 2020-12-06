import React from 'react';
import mockData from '../__data_mocks__/searchData';
import { render, fireEvent } from '@testing-library/react';

describe('<List />', () => {
  let List;

  beforeEach(() => {
    List = require('..').default;
    jest.mock('@/components/Poster', () => () => {
      return <div>Mock Poster</div>;
    });
  });

  test('Renders correctly', async () => {
    const { findByTestId } = render(
      <List loadMore={jest.fn()} data={mockData()} />
    );
    expect(await findByTestId('listContainer')).toBeInTheDocument();
  });

  test('Test load more', async () => {
    const mockLoadMore = jest.fn();
    render(<List loadMore={mockLoadMore} data={mockData()} />);

    fireEvent.scroll(window, { target: { scrollY: 100 } });
    expect(mockLoadMore).toHaveBeenCalled();
  });

  test('Loader is not rendered if no hasNext', () => {
    const mockLoadMore = jest.fn();
    const { queryByTestId } = render(
      <List loadMore={mockLoadMore} data={mockData()} hasNext={false} />
    );

    const loader = queryByTestId('loader');
    expect(loader).not.toBeInTheDocument();
  });
});
