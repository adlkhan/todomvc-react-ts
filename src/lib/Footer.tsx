import { capitalizeFirstLetter, remainingTodosCount } from "./utils";

const Footer = ({ todos, currentFilter, changeFilter } : FooterProps) => {

  const todosCount = remainingTodosCount(todos);
  const filters : TodoFilters[] = ['all', 'active', 'completed'];
  
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

      <button className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}
 
export default Footer;
