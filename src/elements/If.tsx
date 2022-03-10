import React from 'react';

export const If: React.FC<{ is: boolean | undefined | null }> = ({ children, is }) => {
  if (!children || !is) {
    return null;
  }

  return <>{children}</>;
};
