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
