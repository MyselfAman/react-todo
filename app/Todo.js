import React from 'react'

export default function Todo({todo, handleCheck}) {
    console.log(todo.name);

    function handleTodoCheck(){
        handleCheck(todo.id)
    }

  return (
    <div key={todo.id}>
        
        <p><input onChange={handleTodoCheck} checked={todo.completed} type='checkbox'/> {todo.name}</p>
    </div>
  )
}
