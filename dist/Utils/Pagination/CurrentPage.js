"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateItemsOnCurrentPage = void 0;
var calculateItemsOnCurrentPage = function calculateItemsOnCurrentPage(currentPage, itemsPerPage, totalItems) {
  var totalPages = Math.ceil(totalItems / itemsPerPage);
  if (currentPage < totalPages) {
    return itemsPerPage * currentPage;
  } else if (currentPage === totalPages) {
    return totalItems;
  }
};
exports.calculateItemsOnCurrentPage = calculateItemsOnCurrentPage;