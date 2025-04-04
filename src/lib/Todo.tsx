import { useContext, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { DispatchContext } from "./utils";

const Todo = ({ todo } : { todo: TodoType }) => {
  const dispatch = useContext(DispatchContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editableContent, setEditableContent] = useState(todo.content);
  const editField = useRef<HTMLInputElement>(null);

  function handleUpdate() {
    if (editableContent !== '') {
      dispatch!({
        type: 'UPDATE',
        id: todo.id,
        content: editableContent
      });
    } else {
      setEditableContent(todo.content);
    }
    setIsEditing(false);
  }

  if (!isEditing) {
    return ( 
      <li 
        className={`${todo.isCompleted && 'completed'}`}
        onDoubleClick={() => {
          flushSync(() => {
            setIsEditing(true);
          });
          editField.current?.focus();
        }}>
        <div className="view">
          <input 
            className="toggle" 
            type="checkbox"
            onChange={() => {
              dispatch!({
                type: "TOGGLE",
                id: todo.id
              });
            }} 
            checked={todo.isCompleted}
          />
          <label>{ todo.content }</label>
          <button 
            className="destroy"
            onClick={() => {
              dispatch!({
                type: 'DELETE',
                id: todo.id
              });
            }}>
          </button>
        </div>
      </li>
    );
  } else {
    return (
      <li className="editing">
        <input 
          className="edit"
          value={editableContent}
          ref={editField}
          onChange={(e) => setEditableContent(e.target.value)}
          onBlur={handleUpdate}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === 'Escape') {
              handleUpdate();
            }
          }}
        />
      </li>
    );
  }
}
 
export default Todo;
