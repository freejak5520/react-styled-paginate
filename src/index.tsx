import React from 'react';
import Container from './components/Container';
import PageButton from './components/PageButton';
import {
  DEFAULT_CURRENT_PAGE,
  DEFAULT_PAGE_SIZE as DEFAULT_PER_PAGE,
} from './constants';
import { calculatePageOffsets } from './utils';

export const defaultOptions: DefaultOptions = {
  containerComponent: Container,
  pageButtonComponent: PageButton,
  nextText: 'Next',
  previousText: 'Previous',
  firstText: 'First',
  lastText: 'Last',
};

export const Paginate = ({
  total,
  currentPage = DEFAULT_CURRENT_PAGE,
  perPage = DEFAULT_PER_PAGE,
  onClickPage,
  options: initialOptions = {},
}: PaginateProps) => {
  const {
    containerComponent,
    pageButtonComponent,
    firstText,
    lastText,
    nextText,
    previousText,
  } = { ...defaultOptions, ...initialOptions } as DefaultOptions;

  const Container = containerComponent;
  const PageButtonComponent = pageButtonComponent;

  const makePageNumberArray = (startPage: number, endPage: number) => {
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };

  const { startPage, endPage } = calculatePageOffsets(
    currentPage,
    perPage,
    total
  );

  return (
    <Container>
      <PageButtonComponent
        disabled={currentPage === 1}
        onClick={() => onClickPage?.(1)}
      >
        {firstText}
      </PageButtonComponent>
      <PageButtonComponent
        disabled={currentPage === 1}
        onClick={() => onClickPage?.(currentPage - 1)}
      >
        {previousText}
      </PageButtonComponent>
      {makePageNumberArray(startPage, endPage).map(pageNumber => (
        <PageButtonComponent
          key={pageNumber}
          onClick={() => onClickPage?.(pageNumber)}
          active={currentPage === pageNumber}
        >
          {pageNumber}
        </PageButtonComponent>
      ))}
      <PageButtonComponent
        disabled={currentPage === total}
        onClick={() => onClickPage?.(currentPage + 1)}
      >
        {nextText}
      </PageButtonComponent>
      <PageButtonComponent
        disabled={currentPage === total}
        onClick={() => onClickPage?.(total)}
      >
        {lastText}
      </PageButtonComponent>
    </Container>
  );
};
