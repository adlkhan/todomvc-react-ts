import { useState } from "react";

const Header = ({ dispatch } : HeaderProps ) => {

  const [newTodo, setNewTodo] = useState('');

  function handleEnter() {
    if (newTodo === '') return;

    dispatch({
      type: 'ADD',
      content: newTodo
    });

    setNewTodo('');
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input 
        className="new-todo" 
        placeholder="What needs to be done?" 
        autoFocus 
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleEnter();
          }
        }}
      />
    </header>
  );
}

export default Header;
