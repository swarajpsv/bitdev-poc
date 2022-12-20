import React from 'react';
import { render } from '@testing-library/react';
import { BasicMyFooter } from './my-footer.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicMyFooter />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
