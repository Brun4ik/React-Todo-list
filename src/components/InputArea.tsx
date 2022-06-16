import React, { useRef } from 'react'
import "./style.css"
import Props from '../interfaces/Props'

const InputArea: React.FC<Props> = ({ todo, setTodo, addTodo }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className='input'
            onSubmit={(e) => {
                addTodo(e);
                inputRef.current?.blur()
            }}
        >
            <input
                ref={inputRef}
                type='input'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder='add task'
                className='input__area'></input>
            <button className='input_button' type='submit'>
                +
            </button>
        </form>
    )
}

export default InputArea