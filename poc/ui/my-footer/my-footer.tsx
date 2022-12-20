import React, { ReactNode } from 'react';

export type MyFooterProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function MyFooter({ children }: MyFooterProps) {
  return (
    <div>
      <p>Swaraj Dash &#169; 2022</p>
      {children}
    </div>
  );
}
