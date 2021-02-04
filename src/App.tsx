import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import CreateTodo from './pages/create';
import Home from './pages/home';
import ListTodo from './pages/list';
import './styles/index.css';
import { ITodo } from './types';

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    { name: 'Learn Redux', count: 1, status: false },
    { name: 'Learn react', count: 1, status: false, desc: 'Learning!!' },
  ]);
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="flex-1 p-6">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreateTodo />
            </Route>
            <Route path="/list">
              <ListTodo todos={todos} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
