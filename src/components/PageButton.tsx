import React from 'react';

const PageButton = ({
  children,
  onClick,
  active,
  disabled,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & {
  active?: boolean | undefined;
  disabled?: boolean | undefined;
}) => {
  return (
    <div
      onClick={e => {
        if (disabled || active) return;
        onClick && onClick(e);
      }}
      {...rest}
      style={{
        padding: '4px 8px',
        background: active ? '#123456' : '',
        color: active ? 'white' : '',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {children}
    </div>
  );
};

export default PageButton;
