import React from 'react'
export interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    addTodo: (e: React.FormEvent) => void;
}
export default Props