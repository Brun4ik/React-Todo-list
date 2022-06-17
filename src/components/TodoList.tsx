import React from 'react'
import { propsTodos } from '../interfaces/PropsTodo';
import StngleTodoList from './StngleTodoList'
//import PropsTodos from '../interfaces/PropsTodos'
import './style.css'

const TodoList: React.FC<propsTodos> = ({ todos, setTodos }) => {
    return <div className="todoList">
        {todos.map(todo => (
            <StngleTodoList
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
            />
        ))}
    </div>;

};

export default TodoList