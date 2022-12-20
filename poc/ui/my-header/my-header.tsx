import React, { ReactNode } from 'react';

export type MyHeaderProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function MyHeader({ children }: MyHeaderProps) {
  return (
    <div>
      <h1>Welcome to FBP</h1>
      <h3>FBP stands for Finacle Banking Platform</h3>
      {children}
    </div>
  );
}
