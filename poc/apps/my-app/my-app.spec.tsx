import React from 'react';
import { render } from '@testing-library/react';
import { BasicMyApp } from './my-app.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicMyApp />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
