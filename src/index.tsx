import React from 'react';

const DEFAULT_PAGE_SIZE = 5;

type PaginateProps = {
  page?: number;
  totalPages: number;
  pageSize?: number;
  onChange?: (page: number) => void;
};

export const Paginate = ({
  page = 1,
  totalPages,
  pageSize = DEFAULT_PAGE_SIZE,
  onChange,
}: PaginateProps) => {
  console.log(page, totalPages, pageSize, onChange);

  const startOffset = page - Math.floor(pageSize / 2 - 0.1);
  const endOffset = page + Math.floor(pageSize / 2);

  let startPage: number;
  startPage = Math.max(1, startOffset);

  if (totalPages < endOffset) {
    const diff = endOffset - totalPages;
    startPage = startPage - diff;
  }

  let endPage: number;
  endPage = Math.min(
    totalPages,
    endOffset + (startOffset <= 0 ? -startOffset + 1 : 0)
  );

  const pageNumberArray = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <div>
      {pageNumberArray.map(pageNumber => (
        <div
          key={pageNumber}
          onClick={() => onChange && onChange(pageNumber)}
          style={{
            background: page === pageNumber ? '#123456' : '',
            color: page === pageNumber ? 'white' : '',
          }}
        >
          {pageNumber}
        </div>
      ))}
    </div>
  );
};
