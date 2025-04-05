/// <reference types="vite/client" />

type Action = {
  type: 'ADD';
  content: string;
} | {
  type: 'UPDATE';
  id: string;
  content: string;
} | {
  type: 'DELETE';
  id: string;
} | {
  type: 'TOGGLE';
  id: string;
} | {
  type: 'TOGGLE_ALL'
} | {
  type: 'CLEAR_COMPLETED'
}

interface TodoType {
  id: string;
  content: string;
  isCompleted: boolean;
}

interface HeaderProps {
  dispatch: Dispatch<Action>;
}

interface FooterProps { 
  todos: TodoType[];
  changeFilter: (filter: TodoFiltersEnum) => void;
  currentFilter: TodoFiltersEnum;
}
