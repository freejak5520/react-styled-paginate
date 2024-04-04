import React from 'react';
import Container from './components/Container';
import PageButton from './components/PageButton';
import {
  DEFAULT_CURRENT_PAGE,
  DEFAULT_PAGE_SIZE as DEFAULT_PER_PAGE,
} from './constants';
import { calculatePageOffsets } from './utils';

const defaultComponents = {
  pageButtonComponent: PageButton,
  container: Container,
};

export const Paginate = ({
  currentPage: page = DEFAULT_CURRENT_PAGE,
  total: totalPages,
  perPage: pageSize = DEFAULT_PER_PAGE,
  onClickPage: onChange,
  containerComponent = defaultComponents.container,
  pageButtonComponent = defaultComponents.pageButtonComponent,
}: PaginateProps) => {
  const Container = containerComponent;
  const PageButtonComponent = pageButtonComponent;

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
