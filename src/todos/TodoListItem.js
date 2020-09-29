import React from "react";
import './TodoListItem.css'


const TodoListItem = ({todo, onRemovePressed, onDonePressed}) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            {todo.isCompleted ? null:
                <button className="done-button"
                        onClick={() => onDonePressed(todo.text)} >Set As Done</button> }
            <button className="delete-button"
                    onClick={()=> onRemovePressed(todo.text)} > Delete</button>
        </div>
    </div>
);

export default TodoListItem;