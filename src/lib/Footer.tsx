import { useContext } from "react";
import { anyTodoCompleted, capitalizeFirstLetter, remainingTodosCount } from "./utils";
import { DispatchContext } from "./DispatchContext";

const Footer = ({ todos, currentFilter, changeFilter } : FooterProps) => {
  const todosCount = remainingTodosCount(todos);
  const filters : TodoFilters[] = ['all', 'active', 'completed'];
  const dispatch = useContext(DispatchContext);

  function handleClearCompleted() {
    dispatch!({
      type: 'CLEAR_COMPLETED',
    });
  }
  
  return (
    <footer className="footer">
      <span className="todo-count">
        {todosCount} item{todosCount !== 1 && 's'} left
      </span>

      <ul className="filters">
        {filters.map((filter, index) => (
          <li key={index}>
            <a 
              href="#"
              className={`${currentFilter === filter ? 'selected' : ''}`}
              onClick={() => changeFilter(filter)}
              >
              {capitalizeFirstLetter(filter)}
            </a>
          </li>
        ))}
      </ul>

      { anyTodoCompleted(todos) ?
        <button 
          className="clear-completed"
          onClick={handleClearCompleted}>
          Clear completed
        </button> : ''
      }
    </footer>
  );
}
 
export default Footer;
