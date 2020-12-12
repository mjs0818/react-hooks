import React from 'react';
import Form from './Form';
import Header from './Header';
import List from './List';
import TodoStore from './TodoStore';

const App = () => {
  return (
    <TodoStore>
      <Header />
      <Form />
      <List />
    </TodoStore>
  );
};

export default App;
