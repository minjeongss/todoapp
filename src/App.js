import './App.css';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import { useState } from 'react';

const filters=['all','active','completed'];
function App() {
  const [filter,setFilter]=useState(filters[0]);
  return (
    <>
      <Header allFilter={filters} nowFilter={filter} onChange={filter=>setFilter(filter)}/>
      <TodoList nowFilter={filter}/>
    </>
  );
}

export default App;
