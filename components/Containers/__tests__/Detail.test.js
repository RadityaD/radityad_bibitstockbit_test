// integration test for detail

import React from 'react';
import responseMock from '../__data_mocks__/mockDetailResponse';
import { render, act } from '@testing-library/react';

describe('<MoviesHome />', () => {
  let DetailComp;

  const mockPush = jest.fn();
  const mockRouter = jest.fn().mockImplementation(() => {
    return {
      pathname: '',
      push: mockPush,
    };
  });
  beforeEach(() => {
    DetailComp = require('../detailpage').default;

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
      const { findByText } = render(<DetailComp />, {});
      const el = await findByText(/Raditya Danang/); // unique name from mock data
      expect(el).toBeInTheDocument();
    });
  });
});
