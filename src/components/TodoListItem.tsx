import React from "react";

import "./TodoListItem.css";
import { Todo } from "../types";

interface TodoListItemProps {
    todo: Todo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
    return (
        <li>
            <label className={todo.complete ? "complete" : undefined}>
                {todo.text}
                <input type="checkbox" checked={todo.complete} />
            </label>
        </li>
    );
};
