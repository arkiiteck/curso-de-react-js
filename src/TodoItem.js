import './TodoItem.css'
function TodoItem(props){
    return(
      <li className='TodoItem'>
        <i onClick={props.onComplete} className={`fa-solid fa-check Icon Icon-check ${props.completed==true?'Icon-check--active':''}`}></i>
        <p className={`TodoItem-p ${props.completed==true?'TodoItem-p--complete':''}`}>{props.text}</p>
        <button onClick={props.onDelete} className='Icon Icon-delete'><i className="fa-solid fa-xmark"></i></button>
      </li>
    )
  }

  export {TodoItem}