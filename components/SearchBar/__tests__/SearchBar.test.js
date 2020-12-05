import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

jest.useFakeTimers();

describe('<SearchBar />', () => {
  let SearchBar;

  beforeEach(() => {
    SearchBar = require('..').default;
  });

  test('Renders correctly', async () => {
    const { findByTestId } = render(
      <SearchBar onSearch={jest.fn()} debounce={1000} />
    );
    const el = await findByTestId('searchbar');
    expect(el).toBeInTheDocument();
  });

  test('On Input change test', async () => {
    const mockFunc = jest.fn();
    const { findByTestId } = render(
      <SearchBar onSearch={mockFunc} debounce={0} />
    );
    const el = await findByTestId('searchbar');
    act(() => {
      fireEvent.change(el, { target: { value: 'testing' } });
      jest.runAllTimers();
      expect(mockFunc).toHaveBeenCalled();
    });
  });
});
