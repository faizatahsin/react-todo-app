import React from 'react';
import { Todo } from './components/Todo';
import './styles/index.css';

const App = () => {
  return (
    <div>
      <Todo count={355} name="Arif" />
    </div>
  );
};

export default App;
