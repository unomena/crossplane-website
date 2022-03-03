import React from 'react';

const If: React.FC<{ is: boolean | undefined | null }> = ({ children, is }) => {
  if (!children || !is) {
    return null;
  }

  return <>{children}</>;
};

export { If };
