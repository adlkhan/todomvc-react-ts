import { createContext, Dispatch } from "react";

export function todosReducer(state : TodoType[], action : Action) {
  switch(action.type) {
    case 'ADD': {
      const newTodo = {
        id: uuid(),
        isCompleted: false,
        content: action.content
      }
      return [...state, newTodo];
    }
    case 'TOGGLE': {
      return state.map((todo) =>
        todo.id === action.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      ); 
    }
    case 'DELETE': {
      return state.filter((todo) => {
        if (todo.id !== action.id) return todo;
      });
    }
    case 'UPDATE': {
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {...todo, content: action.content}
        } else {
          return todo;
        }
      });
    }
    case 'TOGGLE_ALL': {
      if (state.every(todo => todo.isCompleted)) {
        return state.map(todo => ({...todo, isCompleted: false}));
      } else {
        return state.map(todo => ({...todo, isCompleted: true}));
      }
    }
  }
}

export const DispatchContext = createContext<Dispatch<Action> | null>(null);

export function remainingTodosCount(todos : TodoType[]) {
  return todos.reduce((count, todo) => {
    return !todo.isCompleted ? count + 1 : count;
  }, 0);
}

export function capitalizeFirstLetter(str : string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function filterTodos(todos : TodoType[], filter: TodoFilters) {
  switch(filter) {
    case 'all': {
      return todos;
    }
    case 'active': {
      return todos.filter(todo => !todo.isCompleted);
    }
    case 'completed': {
      return todos.filter(todo => todo.isCompleted);
    }
  }
}


/* Courtesy TodoMVC */
// https://github.com/tastejs/todomvc/blob/master/examples/typescript-react/js/utils.ts

function uuid() {
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
