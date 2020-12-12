import React, { useState, useEffect } from 'react';
import './App.css';
import List from './List.jsx';
import useFetch from './useFecth';
import Header from './Header';
const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const loading = useFetch(setTodos, 'http://localhost:8080/todo');

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  };
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { title: newTodo, id: todos.length, status: 'todo' }]);
  };

  const changeTodoStatus = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === +id) {
        if (todo.status === 'done') todo.status = 'todo';
        else todo.status = 'done';
      }
      return todo;
    });

    setTodos(updateTodos);
  };
  useEffect(() => {
    console.log('새로운 내용이 렌더링됐네요', todos);
  }, [todos]);

  return (
    <>
      <Header todos={todos} />
      <h1>todo 애플리케이션</h1>
      <form action="">
        <input type="text" name="" onChange={changeInputData} />
        <button onClick={addTodo}>할일추가</button>
      </form>
      <List
        todos={todos}
        loading={loading}
        changeTodoStatus={changeTodoStatus}
      />
    </>
  );
};
export default App;
