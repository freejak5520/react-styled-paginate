import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ display: 'flex', gap: 6 }}>{children}</div>;
};

export default Container;
