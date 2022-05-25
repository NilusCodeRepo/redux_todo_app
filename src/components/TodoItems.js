import React from 'react'
import { deleteTodo , setCompleted } from '../redux/TodoSlice'
import { useDispatch } from 'react-redux'

const TodoItems = (props) => {

const dispatch=useDispatch()

const handleDelete=(event)=>{
  dispatch(
    deleteTodo({
      id:props.id,
    })
  )

}  

const handleClick=(event)=>{
  dispatch(
    setCompleted({id:props.id,completed:props.completed})
  )

}
  return (
    <div className='todo-item'>
      <div className='todo-chkbox'>
        <input 
        type="checkbox"
        name={props.title}
        checked={props.completed}
        onClick={handleClick}
        
        />
      </div>  
      <div className='todo-details'>
        <p className='todo-title'>{props.title}</p>
        <p className='todo-desc'>{props.desc}</p>
      </div>
      <div className='todo-delete'>  
        <button onClick={handleDelete}>DELETE</button>
      </div>  
    </div>
  )
}

export default TodoItems