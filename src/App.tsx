import React, { useState } from "react";
import { TodoListItem } from "./components/TodoListItem";
import { Todo, ToggleTodo } from "./types";

const initialTodos: Array<Todo> = [
    { text: "Go shopping", complete: true },
    { text: "Finish the project", complete: false },
];

const App: React.FC = () => {
    const [todos, setTodos] = useState(initialTodos);

    const toggleTodo: ToggleTodo = (selectedTodo) => {
        const newTodos = todos.map((item) => {
            if (item === selectedTodo) {
                return { ...item, complete: !item.complete };
            }
            return item;
        });

        setTodos(newTodos);
    };
    return (
        <>
            <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
            <TodoListItem todo={todos[1]} toggleTodo={toggleTodo} />
        </>
    );
};

export default App;
