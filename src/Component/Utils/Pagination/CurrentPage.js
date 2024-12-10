export const calculateItemsOnCurrentPage = (currentPage, itemsPerPage, totalItems) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (currentPage < totalPages) {
    return itemsPerPage * currentPage;
  } else if (currentPage === totalPages) {
    return totalItems;
  }
};