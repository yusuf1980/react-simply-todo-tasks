import React, { useState } from "react";
import { ToDoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { ToDo } from "./Todo";
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

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done</h1>
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo: any, index) => (
        <ToDo task={todo} key={index} toggleComplete={toggleComplete} />
      ))}
    </div>
  );
};
