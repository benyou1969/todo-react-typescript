import React from "react";
import { TodoListItem } from "./components/TodoListItem";
import { Todo } from "./types";

const todos: Array<Todo> = [
    { text: "Go shopping", complete: true },
    { text: "Finish the project", complete: false },
];

const App: React.FC = () => {
    return (
        <>
            <TodoListItem todo={todos[0]} />
            <TodoListItem todo={todos[1]} />
        </>
    );
};

export default App;
