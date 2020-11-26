import React from 'react';
import { Todo } from './components/Todo';
import './styles/index.css';

const App = () => {
  return (
    <div>
      <Todo name="arif" count="30" status={true} />
      <Todo name="faiza tahsin" count={30} status={false} desc="Nothing special !!💖" />
    </div>
  );
};

export default App;
