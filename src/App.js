import './App.css';
import React, {useState, useEffect} from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoCount from './TodoCount';

function App() {

  const [todos, setTodos] = useState([]);

  const handleAdd = (item) =>{

    const tmpTodos = [...todos];
    const addedItem = {
      text:item,
      completed:false
    }
    setTodos(tmpTodos.concat(addedItem));
  }

  const handleTodos = (i) =>{
      const nextTodos = [...todos];
      nextTodos[i].completed = true;
      setTodos(nextTodos);
  }


  return (
    <div className="App">
      <TodoInput handleAdd={handleAdd} ></TodoInput>
      <TodoList handleTodos={handleTodos} todos={todos}></TodoList>
      <TodoCount todos={todos} ></TodoCount>
    </div>
  );
}

export default App;
