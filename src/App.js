import logo from './logo.svg';
import './App.css';
import React from 'react';
import {TodoCounter } from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import {TodoItem} from "./TodoItem"
import {CreateTodoButton} from './CreateTodoButton'

/*
const defaultTodos=[
  {text:'Texto del Item 1', completed:true},
  {text:'2. Descripción de la tarea', completed:false},
  {text:'Tercera tarea: Descripción', completed:false},
  {text:'Quinta descripción', completed:false},
  {text:'Información de última tarea', completed:true}
]
const stringyfiedTodos=JSON.stringify(defaultTodos)
localStorage.setItem('TODOS_V1', stringyfiedTodos)
*/

function useLocalStorage(itemName, initialValue){
  const localStorageItem=localStorage.getItem('TODOS_V1')
  let parsedItem
  if(!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue))
    parsedItem=initialValue
  }
  else{
    parsedItem=JSON.parse(localStorageItem)
  }
  const [item,setItem]=React.useState(parsedItem)
  const saveItem=(newItem)=>{
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }
  return [item,saveItem]
}
function App(){
  const [todos, saveTodos]=useLocalStorage('TODOS_V1',[])
  const [searchValue, setSearchValue]=React.useState('')
  const completeTodo=(text)=>{
    const newTodos=[...todos]
    const todoIndex=newTodos.findIndex((todo)=>todo.text==text)
    newTodos[todoIndex].completed= !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }
  const deleteTodo=(text)=>{
    const newTodos=[...todos]
    const todoIndex=newTodos.findIndex((todo)=>todo.text==text)
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos)
  }
  const completedTodos=todos.filter(todo=>todo.completed).length;
  const totalTodos=todos.length
  const searchedTodos=todos.filter(todo=>(todo.text.toLowerCase().includes(searchValue.toLowerCase())))
  return(
    <React.Fragment>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo=>(
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>{completeTodo(todo.text)}}
            onDelete={()=>{deleteTodo(todo.text)}}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  )
}

export default App



