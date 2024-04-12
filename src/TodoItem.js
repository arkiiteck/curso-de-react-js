import './TodoItem.css'
function TodoItem(props){
    return(
      <li>
        <span>{props.completed}</span>
        <p>{props.text}</p>
        <button>x</button>
      </li>
    )
  }

  export {TodoItem}