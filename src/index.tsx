import React from 'react';

const DEFAULT_PAGE_SIZE = 5;

type PageButtonComponentType = React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    active?: boolean;
    disabled?: boolean;
  }
>;

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ display: 'flex', gap: 6 }}>{children}</div>;
};

const PageButtonComponent: PageButtonComponentType = ({
  children,
  onClick,
  active,
  disabled,
  ...rest
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

const components = {
  pageButtonComponent: PageButtonComponent,
  container: Container,
};

type PaginateProps = {
  page?: number;
  totalPages: number;
  pageSize?: number;
  onChange?: (page: number) => void;
  containerComponent?: React.FC<{ children: React.ReactNode }>;
  pageButtonComponent?: PageButtonComponentType;
};

export const Paginate = ({
  page = 1,
  totalPages,
  pageSize = DEFAULT_PAGE_SIZE,
  onChange,
  containerComponent = components.container,
  pageButtonComponent = components.pageButtonComponent,
}: PaginateProps) => {
  const Container = containerComponent;
  const PageButtonComponent = pageButtonComponent;

  const calculatePageOffsets = (
    page: number,
    pageSize: number,
    totalPages: number
  ) => {
    let startOffset = page - Math.floor(pageSize / 2 - 0.1);
    let endOffset = page + Math.floor(pageSize / 2);

    let startPage = Math.max(1, startOffset);
    if (totalPages < endOffset) {
      const diff = endOffset - totalPages;
      startPage -= diff;
    }

    const endPage = Math.min(
      totalPages,
      endOffset + (startOffset <= 0 ? -startOffset + 1 : 0)
    );
    return { startPage, endPage };
  };

  const makePageNumberArray = (startPage: number, endPage: number) => {
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };

  const { startPage, endPage } = calculatePageOffsets(
    page,
    pageSize,
    totalPages
  );

  return (
    <Container>
      <PageButtonComponent disabled={page === 1} onClick={() => onChange?.(1)}>
        First
      </PageButtonComponent>
      <PageButtonComponent
        disabled={page === 1}
        onClick={() => onChange?.(page - 1)}
      >
        Previous
      </PageButtonComponent>
      {makePageNumberArray(startPage, endPage).map(pageNumber => (
        <PageButtonComponent
          key={pageNumber}
          onClick={() => onChange?.(pageNumber)}
          active={page === pageNumber}
        >
          {pageNumber}
        </PageButtonComponent>
      ))}
      <PageButtonComponent
        disabled={page === totalPages}
        onClick={() => onChange?.(page + 1)}
      >
        Next
      </PageButtonComponent>
      <PageButtonComponent
        disabled={page === totalPages}
        onClick={() => onChange?.(totalPages)}
      >
        Last
      </PageButtonComponent>
    </Container>
  );
};
