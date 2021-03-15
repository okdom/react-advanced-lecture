import React, {useState} from 'react';

export default function TodoList({todos, handleTodos}){
    
    const printTodos = todos.map((item, i)=>(
        <li key={i} className={item.completed?'completed':''}  onClick={()=>handleTodos(i)} >{item.text}</li>));
                    
    return(
        <>
            <ul className="Box">
                {printTodos}
            </ul>
        </>
    );
}