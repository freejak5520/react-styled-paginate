export const calculatePageOffsets = (
  currentPage: number,
  perPage: number,
  total: number
) => {
  let startOffset = currentPage - Math.floor(perPage / 2 - 0.1);
  let endOffset = currentPage + Math.floor(perPage / 2);

  let startPage = Math.max(1, startOffset);
  if (total < endOffset) {
    const diff = endOffset - total;
    startPage -= diff;
  }

  const endPage = Math.min(
    total,
    endOffset + (startOffset <= 0 ? -startOffset + 1 : 0)
  );
  return { startPage, endPage };
};
