import { createPages, getTotalPages } from "helpers/helpers";
import { createSelector } from "reselect";
import { orderFiltersSelector } from "./orderFilters";
import { getPagination } from "./pagination";
import { getSorting } from "./sorting";
import { getEditOrder } from "./editOrder";

const getOrderList = ({ orderList }) => orderList;

export const getOrderForEdit = createSelector(
  [getOrderList, getEditOrder],
  (orders, editOrder) =>
    orders.find(
      (order) => editOrder !== "" && order.id.includes(editOrder.orderId)
    )
);

const isInRange = (min, max, value) => {
  const minValue = min || 0;
  const maxValue = max || Number.MAX_SAFE_INTEGER;
  if (min || max) {
    return value >= minValue && value <= maxValue;
  }
  return true;
};
const sortingOrder = (key, direction) => (a, b) => {
  let valueA = a[key];
  let valueB = b[key];

  if (key === "date") {
    valueA = stringDateToMilliseconds(a[key]);
    valueB = stringDateToMilliseconds(b[key]);
  }
  if (key === "id" || key === "sum") {
    valueA = Number(a[key]);
    valueB = Number(b[key]);
  }
  if (direction === "asc") {
    if (valueA > valueB) {
      return 1;
    }
    if (valueA < valueB) {
      return -1;
    }
    return 0;
  }
  if (valueA > valueB) {
    return -1;
  }
  if (valueA < valueB) {
    return 1;
  }
  return 0;
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
  [getOrderList, orderFiltersSelector, getSorting],
  (orderList, filters, { key, direction }) => {
    const { search, dateFrom, dateTo, amountFrom, amountTo, status } = filters;
    return orderList
      .filter((order) => {
        return areAllTruthy([
          isInRange(amountFrom, amountTo, Number(order.sum)),
          isInRange(
            stringDateToMilliseconds(dateFrom),
            stringDateToMilliseconds(dateTo),
            stringDateToMilliseconds(order.date)
          ),
          isIncludesStatus(status, order.status),
          isStartsWith(order.fullName, search) ||
            isStartsWith(order.id, search),
        ]);
      })
      .sort(sortingOrder(key, direction));
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
