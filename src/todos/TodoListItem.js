import React from "react";
import './TodoListItem.css'


const TodoListItem = ({todo}) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            <button className="done-button">Done</button>
            <button className="delete-button">Delete</button>
        </div>
    </div>
);

export default TodoListItem;