import Todo from "./Todo";
export type PropsSingleTodoList = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}