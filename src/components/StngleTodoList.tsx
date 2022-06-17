import React from 'react'
import { PropsSingleTodoList } from '../interfaces/PropsSingleTodoList'
import Todo from '../interfaces/Todo'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { MdOutlineDoneAll } from 'react-icons/md'
import './style.css'


const StngleTodoList = ({ todo, todos, setTodos }: PropsSingleTodoList) => {
    return <form className='todo_single_list'>
        <span className='todo_single_list_text'>{todo.todo}</span>
        <div className='icons'>
            <span className="icon" onClick={() =>}>
                <FiEdit />
            </span>
            <span className="icon" onClick={() =>}>
                <RiDeleteBin2Fill />
            </span>
            <span className="icon" onClick={() =>}>
                <MdOutlineDoneAll />
            </span>
        </div>
    </form>
}

export default StngleTodoList