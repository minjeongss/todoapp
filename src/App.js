import './App.css';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import { useState } from 'react';
import { DarkModeProvider } from './context/DarkModeConetxt';

const filters=['all','active','completed'];
function App() {
  const [filter,setFilter]=useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header allFilter={filters} nowFilter={filter} onChange={filter=>setFilter(filter)}/>
      <TodoList nowFilter={filter}/>
    </DarkModeProvider>
  );
}

export default App;
