import React from 'react';
import Container from './components/Container';
import PageButton from './components/PageButton';
import {
  DEFAULT_CURRENT_PAGE,
  DEFAULT_PAGE_SIZE as DEFAULT_PER_PAGE,
} from './constants';

type PaginateProps = {
  currentPage?: number;
  total: number;
  perPage?: number;
  onClickPage?: (page: number) => void;
  options?: Options;
};

type ContainerComponentType = React.FC<
  React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }
>;

type PageButtonComponentType = React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    active?: boolean;
    disabled?: boolean;
  }
>;

type Options = {
  containerComponent?: ContainerComponentType;
  pageButtonComponent?: PageButtonComponentType;
  previousText?: string;
  nextText?: string;
  firstText?: string;
  lastText?: string;
};

type DefaultOptions = {
  containerComponent: ContainerComponentType;
  pageButtonComponent: PageButtonComponentType;
  previousText: string;
  nextText: string;
  firstText: string;
  lastText: string;
};

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
