import React from 'react' 
import './TodoListItem.css';

const TodoListItem =({todo,onRemovePressed,onMarkPressed})=>(
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            {(todo.isCompleted)?'':<button 
            onClick={() => onMarkPressed(todo.id)}
            className="completed-button">Mark As Completed</button>}
            <button 
             onClick={() => onRemovePressed(todo.id)}
             className="remove-buttom">Remove</button>
        </div>
    </div>
)

export default TodoListItem;