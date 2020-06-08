import React, { useState } from "react";
import { TodoListItem } from "./components/TodoListItem";
import { Todo, ToggleTodo, AddTodo } from "./types";
import { TodoList } from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";

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

    const addTodo: AddTodo = (newTodo) => {
        if (newTodo) {
            setTodos([...todos, { text: newTodo, complete: false }]);
        }
    };

    return (
        <>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <AddTodoForm addTodo={addTodo} />
        </>
    );
};

export default App;
