export function getTodoBasedOnPage(todo, page) {
  if (Array.isArray(todo) && page > 0) {
    return todo.slice((page - 1) * 20, page * 20);
  }
  return [];
}

export function isMoreDataPresent(todo, page) {
  return page * 20 < todo.length;
}
