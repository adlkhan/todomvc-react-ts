import { TodoFiltersEnum } from "./enums";

export function remainingTodosCount(todos : TodoType[]) {
  return todos.reduce((count, todo) => {
    return !todo.isCompleted ? count + 1 : count;
  }, 0);
}

export function filterTodos(todos : TodoType[], filter: TodoFiltersEnum) {
  switch(filter) {
    case TodoFiltersEnum.All: {
      return todos;
    }
    case TodoFiltersEnum.Active: {
      return todos.filter(todo => !todo.isCompleted);
    }
    case TodoFiltersEnum.Completed: {
      return todos.filter(todo => todo.isCompleted);
    }
  }
}

export function anyTodoCompleted(todos: TodoType[]) {
  return todos.some(todo => todo.isCompleted);
}

export function capitalizeFirstLetter(str : string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* Courtesy TodoMVC */
// https://github.com/tastejs/todomvc/blob/master/examples/typescript-react/js/utils.ts

export function uuid() {
  /*jshint bitwise:false */
  let i, random;
  let uuid = '';

  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    }
    uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
      .toString(16);
  }
  return uuid;
}
