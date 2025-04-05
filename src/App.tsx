import Footer from "./lib/Footer";
import Header from "./lib/Header";
import Main from "./lib/Main";
import { useReducer, useState } from "react";
import { filterTodos } from "./lib/utils";
import { DispatchContext } from "./lib/DispatchContext";
import { todosReducer } from "./lib/todosReducer";
import { TodoFiltersEnum } from "./lib/enums";

function App() {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const [currentTodosFilter, setCurrentTodosFilter] = useState<TodoFiltersEnum>(TodoFiltersEnum.All);
  const filteredTodos = filterTodos(todos, currentTodosFilter);

  function changeFilter(filter : TodoFiltersEnum) {
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
