import './TodoItem.css'
function TodoItem(props){
    return(
      <li className='TodoItem'>
        <span className={`Icon Icon-check ${props.completed==true?'Icon-check--active':''}`}>V</span>
        <p className={`TodoItem-p ${props.completed==true?'TodoItem-p--complete':''}`}>{props.text}</p>
        <button className='Icon Icon-delete'>x</button>
      </li>
    )
  }

  export {TodoItem}