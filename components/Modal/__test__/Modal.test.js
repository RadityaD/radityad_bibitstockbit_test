import React from 'react';
import { render } from '@testing-library/react';

describe('<Modal />', () => {
  let Modal;

  beforeEach(() => {
    Modal = require('..').default;
  });

  test('Renders with correct children passed', async () => {
    const { findByText } = render(
      <Modal>
        <div>test-m0d4l-children</div>
      </Modal>
    );
    expect(await findByText('test-m0d4l-children')).toBeInTheDocument();
  });
});
