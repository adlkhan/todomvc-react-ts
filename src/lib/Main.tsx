import Todo from "./Todo";
import { useContext } from 'react';
import { DispatchContext } from "./utils";

const Main = ({ todos } : { todos : TodoType[] }) => {
  const dispatch = useContext(DispatchContext);

  return ( 
    <main className="main">
      { todos.length > 0 && 
        <div 
          className="toggle-all-container"
          onClick={() => {
            dispatch!({
              type: "TOGGLE_ALL"
            });
          }}
          >
          <input 
            className="toggle-all"
            type="checkbox"
          />
          <label className="toggle-all-label"
            htmlFor="toggle-all">
            Mark all as complete
          </label>
        </div>
      }

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </ul>
    </main>
  );
}

export default Main;
