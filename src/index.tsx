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
    <div>
      {makePageNumberArray(startPage, endPage).map(pageNumber => (
        <div
          key={pageNumber}
          onClick={() => onChange?.(pageNumber)}
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
