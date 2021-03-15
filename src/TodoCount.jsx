import React from 'react';

export default function TodoCount(props){

    let todosSize = props.todos.length;

    let completedCnt = 0;

    for(let i=0; i<todosSize; i++){
        if(props.todos[i].completed === true)
            completedCnt++;
    }

    return(
        <>
            남은 todo 수: {todosSize}
            완료된 todo 수: {completedCnt}
        </>
    )
}