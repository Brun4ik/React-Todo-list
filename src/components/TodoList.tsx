import React from 'react'
import { propsTodos } from '../interfaces/PropsTodo';
//import PropsTodos from '../interfaces/PropsTodos'
import './style.css'

const TodoList: React.FC<propsTodos> = ({ todos, setTodos }) => {
    return <div className="todoList">
        {todos.map(todo => (
            <li>{todo.todo}</li>
        ))}
    </div>;

};

export default TodoList