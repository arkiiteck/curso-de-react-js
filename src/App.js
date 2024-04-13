import logo from './logo.svg';
import './App.css';
import React from 'react';
import {TodoCounter } from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import {TodoItem} from "./TodoItem"
import {CreateTodoButton} from './CreateTodoButton'

const defaultTodos=[
  {text:'Texto del Item 1', completed:true},
  {text:'2. Descripción de la tarea', completed:false},
  {text:'Tercera tarea: Descripción', completed:false},
  {text:'Información de última tarea', completed:false}
]

function App(){
  const [todos, setTodos]=React.useState(defaultTodos)
  const [searchValue, setSearchValue]=React.useState('')
  const completedTodos=todos.filter(todo=>todo.completed.length)
  const totalTodos=todos.filter(todo=>todo.length)
  console.log(searchValue);
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
        {defaultTodos.map(todo=>(
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  )
}

export default App



