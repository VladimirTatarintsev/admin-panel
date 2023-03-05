import { createPages, getTotalPages } from "helpers/helpers";
import { createSelector } from "reselect";
import { getPagination } from "./pagination";

export const getOrderList = ({ orderList }) => orderList;

export const getOrders = createSelector(
  [getOrderList, getPagination],
  (orders, { currentPage, pageLimit }) => {
    return orders.slice(pageLimit * (currentPage - 1), pageLimit * currentPage);
  }
);
export const getOrderPages = createSelector(
  [getOrderList, getPagination],
  (orders, { pageLimit, currentPage }) => {
    const totalPages = getTotalPages(orders.length, pageLimit);
    if (totalPages === 1) {
      return {};
    }
    let pages = [];
    createPages(pages, totalPages);

    return {
      currentPage: currentPage,
      pages: pages,
    };
  }
);
