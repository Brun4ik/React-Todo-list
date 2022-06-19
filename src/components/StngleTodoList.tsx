import React, { useState } from 'react'
import { PropsSingleTodoList } from '../interfaces/PropsSingleTodoList'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { MdBorderAll, MdColorize, MdOutlineDoneAll } from 'react-icons/md'
import { AiOutlineExclamation } from 'react-icons/ai'
import './style.css'
import Timer from './Timer'

const StngleTodoList = ({ todo, todos, setTodos }: PropsSingleTodoList) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, seteditTodo] = useState<string>(todo.todo);
    const formStyle = {
        border: '2px solid red',
    };
    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
        )
    };

    const handleDelete = (id: number) => {

    }

    const handleImportant = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, important: !todo.important } : todo))
    }

    return <form className='todo_single_list'>
        {
            edit ? (
                <input></input>
            ) : todo.isDone ? (
                <s className='todo_single_list_text'>{todo.todo}</s>
            ) : (
                <span className='todo_single_list_text'>{todo.todo}</span>
            )
        }

        <Timer />
        <div className='icons'>
            <span className="icon" onClick={() => {
                if (!edit && !todo.isDone) {
                    setEdit(!edit)
                }
            }
            }>
                <FiEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
                <RiDeleteBin2Fill />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
                <MdOutlineDoneAll />
            </span>
            <span className="icon">
                <AiOutlineExclamation />
            </span>
        </div>
    </form>
}

export default StngleTodoList
