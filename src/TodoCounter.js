import './TodoCounter.css'
function TodoCounter({completed,total}){
  if(completed==total){
    return(
      <h1>Completaste todos los TODOs</h1>
    )    
  }
  else{
    return(
      <h1>Completaste: {completed} de {total} TODOs</h1>
    )
  }
}

  export {TodoCounter}