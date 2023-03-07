import { createPages, getTotalPages } from "helpers/helpers";
import { createSelector } from "reselect";
import { orderFiltersSelector } from "./orderFilters";
import { getPagination } from "./pagination";

const getOrderList = ({ orderList }) => orderList;

const isInRange = (min, max, value) => {
  const minValue = min || 0;
  const maxValue = max || Number.MAX_SAFE_INTEGER;
  if (min || max) {
    return value >= minValue && value <= maxValue;
  }
  return true;
};

const stringDateToMilliseconds = (str) => {
  const [day, month, year] = str.split(".");
  return Date.parse(`${year}-${month}-${day}`);
};

const isIncludesStatus = (arr, str) => {
  if (arr.length && str) {
    return arr.includes(str);
  }
  return true;
};

const isStartsWith = (str, value) => {
  return str.toLowerCase().includes(value.toLowerCase());
};

const areAllTruthy = (values) => {
  return values.every(Boolean);
};

const getFilteredAndSortedOrders = createSelector(
  [getOrderList, orderFiltersSelector],
  (orderList, { search, dateFrom, dateTo, amountFrom, amountTo, status }) => {
    console.log(status);
    return orderList.filter((order) => {
      return areAllTruthy([
        isInRange(amountFrom, amountTo, Number(order.sum)),
        isInRange(
          stringDateToMilliseconds(dateFrom),
          stringDateToMilliseconds(dateTo),
          stringDateToMilliseconds(order.date)
        ),
        isIncludesStatus(status, order.status),
        isStartsWith(order.fullName, search) || isStartsWith(order.id, search),
      ]);
    });
  }
);

export const getOrders = createSelector(
  [getFilteredAndSortedOrders, getPagination],
  (orders, { currentPage, pageLimit }) => {
    return orders.slice(pageLimit * (currentPage - 1), pageLimit * currentPage);
  }
);

export const getOrderPages = createSelector(
  [getFilteredAndSortedOrders, getPagination],
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
