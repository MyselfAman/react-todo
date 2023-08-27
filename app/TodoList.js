import React from 'react'
import Todo from './Todo'
export default function TodoList({todo , handleCheck}) {
    console.log(todo);
  return (
    <div>
       {
        todo.map(t => {
            return <Todo handleCheck={handleCheck} key={t.id} todo={t}/>
        })
       }
    </div>
  )
}
