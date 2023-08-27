"use client"; // This is a client component 👈🏽
import { useState ,useRef, useEffect } from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';
export default function Home() {

  const [todo, setTodo] = useState([]);
  const todoNameRef = useRef()
  useEffect(()=>{
    const mytodo = JSON.parse(localStorage.getItem('todos'));
    if(mytodo) setTodo(mytodo)
  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todo));
  },[todo])

  function handleCheck(id){
    const newTodo = [...todo];
    const mytodo = newTodo.find(t=> t.id === id);
    console.log("before update", newTodo);
    mytodo.completed = !mytodo.completed;
    setTodo(newTodo)
    console.log("after update", newTodo);
  }

  function handleInput(e){
    const name = todoNameRef.current.value;
    if(name=== '') return
    console.log(name);
    setTodo(prevTodo => {
      return [...prevTodo, {id : uuidv4() , name: name , completed : false}]
    })
  }

  return (
    <main >
      <input ref={todoNameRef} type="text"/>
      <button onClick={handleInput}>Add Todo</button>
      <button >Clear Todo</button>
      <TodoList todo={todo} handleCheck={handleCheck}/>
    </main>
  )
}
