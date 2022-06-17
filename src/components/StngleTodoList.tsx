import React, { useState } from 'react'
import { PropsSingleTodoList } from '../interfaces/PropsSingleTodoList'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { MdOutlineDoneAll } from 'react-icons/md'
import { AiOutlineExclamation } from 'react-icons/ai'
import './style.css'
import Timer from './Timer'

const StngleTodoList = ({ todo, todos, setTodos }: PropsSingleTodoList) => {

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
        )
    };
    const handleDelete = (id: number) => {

    }
    return <form className='todo_single_list'>
        {
            todo.isDone ? (<s className='todo_single_list_text'>{todo.todo}</s>) :
                (<span className='todo_single_list_text'>{todo.todo}</span>)
        }
        <Timer />
        <div className='icons'>
            <span className="icon">
                <FiEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
                <RiDeleteBin2Fill />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
                <MdOutlineDoneAll />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
                <AiOutlineExclamation />
            </span>
        </div>
    </form>
}

export default StngleTodoList