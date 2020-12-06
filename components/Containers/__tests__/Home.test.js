// integration test for list

import React from 'react';
import responseMock from '../__data_mocks__/mockListResponse';
import { render, act } from '../../../helpers/test/renderWithRedux';

const mockInitStoreVal = {
  filmdb: {
    s: 'Batman',
    page: 1,
  },
};

describe('<MoviesHome />', () => {
  let HomeComp;

  const mockPush = jest.fn();
  const mockRouter = jest.fn().mockImplementation(() => {
    return {
      pathname: '',
      push: mockPush,
    };
  });
  beforeEach(() => {
    HomeComp = require('../homepage').default;

    const data = {
      data: responseMock,
    };

    jest.mock('axios');
    const axios = require('axios');
    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    jest.mock('next/router', () => {
      const original = jest.requireActual('next/router');
      return {
        ...original,
        useRouter: mockRouter,
      };
    });
  });

  test('Renders correctly with redux and mocked axios response', async () => {
    await act(async () => {
      const { findByText } = render(<HomeComp />, {});
      const el = await findByText(/Batman: The Dark Knight Returns, Part 1/); // unique name from mock data
      expect(el).toBeInTheDocument();
    });
  });
});
