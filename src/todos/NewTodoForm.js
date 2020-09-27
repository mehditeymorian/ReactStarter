import React, {useState} from "react";
import './NewTodoForm.css'


const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="new-todo-form">
            <input className="new-todo-input"
                   type="text"
                   placeholder={"Enter New Todo"}
                   value={inputValue}
                   onChange={e => setInputValue(e.target.value)}/>
            <button className="new-todo-button"> Create</button>
        </div>
    );
}

export default NewTodoForm;