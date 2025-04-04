import { uuid } from "./utils";

export function todosReducer(state: TodoType[], action: Action) {
  switch (action.type) {
    case 'ADD': {
      const newTodo = {
        id: uuid(),
        isCompleted: false,
        content: action.content
      };
      return [...state, newTodo];
    }
    case 'TOGGLE': {
      return state.map((todo) => todo.id === action.id
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
          return { ...todo, content: action.content };
        } else {
          return todo;
        }
      });
    }
    case 'TOGGLE_ALL': {
      if (state.every(todo => todo.isCompleted)) {
        return state.map(todo => ({ ...todo, isCompleted: false }));
      } else {
        return state.map(todo => ({ ...todo, isCompleted: true }));
      }
    }
    case 'CLEAR_COMPLETED': {
      return state.filter(todo => !todo.isCompleted);
    }
  }
}
