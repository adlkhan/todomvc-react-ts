import Footer from "./lib/Footer";
import Header from "./lib/Header";
import Main from "./lib/Main";
import { useReducer, useState } from "react";
import { todosReducer, DispatchContext, filterTodos } from "./lib/utils";

function App() {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const [currentTodosFilter, setCurrentTodosFilter] = useState<TodoFilters>('all');
  const filteredTodos = filterTodos(todos, currentTodosFilter);

  function changeFilter(filter : TodoFilters) {
    setCurrentTodosFilter(filter);
  }

  return (
    <section className="todoapp">
      <DispatchContext.Provider value={dispatch}>
        <Header dispatch={dispatch} />
        <Main todos={filteredTodos} />
        {todos.length > 0 && <Footer todos={filteredTodos} changeFilter={changeFilter} currentFilter={currentTodosFilter} />}
      </DispatchContext.Provider>
    </section>
  );
}

export default App;
