import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = (state) => state.filters.search;
export const searchStatusSelector = (state) => state.filters.status;
export const searchPrioritySelector = (state) => state.filters.prioriry;
export const todoListSelector = (state) => state.todoList.todos;
export const tosoCompletedSelector = (state) => state.todoList.todos.complete;

export const todoRemaningSelector = createSelector(
  searchTextSelector,
  searchStatusSelector,
  searchPrioritySelector,
  todoListSelector,
  (searchResult, statusResult, prioriryResult, todoResult) => {
    return todoResult.filter((todo) => {
      const searchCondition = todo.name.includes(searchResult);
      const priorityCondition = prioriryResult.includes(todo.prioriry);
      const priorirylength = prioriryResult.length;
      if (statusResult === "All") {
        return priorirylength
          ? searchCondition && priorityCondition
          : searchCondition;
      }
      return (
        searchCondition &&
        (statusResult === "Completed" ? todo.complete : !todo.complete) &&
        (priorirylength ? priorityCondition : true)
      );
    });
  }
);
