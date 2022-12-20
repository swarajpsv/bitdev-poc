import React, { ReactNode } from 'react';
import { MyHeader } from '@swarajpsv/poc.ui.my-header';
import { MyFooter } from '@swarajpsv/poc.ui.my-footer';

export type MyAppProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function MyApp({ children }: MyAppProps) {
  return (
    <div>
      <MyHeader></MyHeader>
      {children}
      <MyFooter></MyFooter>
    </div>
  );
}
