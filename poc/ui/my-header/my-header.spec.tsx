import React from 'react';
import { render } from '@testing-library/react';
import { BasicMyHeader } from './my-header.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicMyHeader />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
