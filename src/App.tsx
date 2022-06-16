import React, { useState } from 'react';
import InputArea from './components/InputArea';
import './App.css';
import { Todo } from './interfaces/Todo';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }

  }
  console.log(todos)

  return (
    <div className="App">
      <span className='head'>TodoList</span>
      <InputArea todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
