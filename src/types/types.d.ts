type PaginateProps = {
  currentPage?: number;
  total: number;
  perPage?: number;
  onClickPage?: (page: number) => void;
  containerComponent?: React.FC<{ children: React.ReactNode }>;
  pageButtonComponent?: PageButtonComponentType;
};

type PageButtonComponentType = React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    active?: boolean;
    disabled?: boolean;
  }
>;
