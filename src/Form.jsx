import React, { useContext } from 'react';
import { TodoContext } from './TodoStore';

const Form = () => {
  const { addTodo, changeInputData } = useContext(TodoContext);
  return (
    <div>
      <form action="">
        <input type="text" name="" onChange={changeInputData} />
        <button onClick={addTodo}>할일추가</button>
      </form>
    </div>
  );
};

export default Form;
