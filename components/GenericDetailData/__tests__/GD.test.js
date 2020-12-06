import React from 'react';
import { render } from '@testing-library/react';

describe('<GenericDetailData />', () => {
  let GenericData;

  beforeEach(() => {
    GenericData = require('..').default;
  });

  test('Renders title and content correctly', async () => {
    const { findByText } = render(
      <GenericData title="testing321" content="testing123" />
    );
    expect(await findByText('testing321')).toBeInTheDocument();
    expect(await findByText('testing123')).toBeInTheDocument();
  });
});
