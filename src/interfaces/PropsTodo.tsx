import { Todo } from "../interfaces/Todo"
export interface propsTodos {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}