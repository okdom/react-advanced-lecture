import React from 'react';

export default function TodoInput({handleAdd}){

    //엔터 누를시
    const handleSumit = (e) =>{
        e.preventDefault();
        let input = e.target.input.value;
        e.target.input.value="";
        handleAdd(input);
    }

    return(
        <>
            <form onSubmit={handleSumit}>
                <input type="text" name="input" placeholder="input"></input>
            </form>
        </>
    )

}