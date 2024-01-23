import React, { useState, useEffect } from 'react';
import { FaTrashAlt, FaPen } from 'react-icons/fa';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editTodo, setEditTodo] = useState(null);
  const [editedText, setEditedText] = useState('');

  useEffect(() => {
    // Load todos from local storage when the component mounts
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    // Save todos to local storage whenever todos change
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const startEdit = (id, text) => {
    setEditTodo(id);
    setEditedText(text);
  };

  const cancelEdit = () => {
    setEditTodo(null);
    setEditedText('');
  };

  const saveEdit = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: editedText } : todo
      )
    );
    setEditTodo(null);
    setEditedText('');
  };

  return (
    <div className="flex ml-16">
      <div>
        <h1 className="mb-10 text-4xl font-bold">Todo App</h1>
        <div className="flex">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="p-2 pl-4 mr-6 bg-white border border-gray-300 rounded w-96"
            placeholder="add todo ..."
          />
          <button
            onClick={addTodo}
            className="p-2 rounded bg-home-secondary hover:bg-secondary-2 hover:text-white"
          >
            Add Todo
          </button>
        </div>
        <ul className="mt-6">
          {todos.map((todo) => (
            <li key={todo.id} className="relative">
              {editTodo === todo.id ? (
                <div className='h-12 p-3 pb-2 mb-2 rounded bg-secondary-3'>
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className="p-1 mb-2 rounded"
                  />
                  <button
                    onClick={() => saveEdit(todo.id)}
                    className="w-16 ml-4 mr-4 rounded bg-home-secondary hover:bg-secondary-2 hover:text-white"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="w-16 rounded bg-home-secondary hover:bg-secondary-2 hover:text-white"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="relative h-12 p-3 mb-2 rounded bg-secondary-3">
                  <div className="absolute flex items-center space-x-2 right-3 top-4">
                    <button
                      onClick={() => startEdit(todo.id, todo.text)}
                      className='p-1 pl-2 pr-2 bg-transparent border-2 border-yellow-700 rounded hover:text-blue-600'
                    >
                      <FaPen />
                    </button>
                    <button
                      onClick={() => removeTodo(todo.id)}
                      className='p-1 pl-2 pr-2 bg-transparent border-2 border-yellow-700 rounded hover:text-red-600'
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className='w-8'
                  />
                  <span
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    className="text-lg"
                  >
                    {todo.text}
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
