import React, { useState } from "react";
import { ToDoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { ToDo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

interface inTodo {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

export const TodoWrapper = () => {
  const [todos, setTodos] = useState<inTodo[]>([]);

  const addTodo = (todo: string) => {
    const data = {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false,
    };
    setTodos((todos) => [...todos, data]);
    console.log(todos);
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo: any) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task:any, id:string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done</h1>
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo: any, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <ToDo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
