

import React from 'react'
import AddTodo from './AddTodo'
import { useSelector } from 'react-redux'
import TodoItems from './TodoItems'

const TodoList = () => {
    const data=useSelector((state)=>state.Todo)
    const completeItems=data.filter((item)=>{
      return item.completed===true
    })
  return (
    <div>
        <h1 className='todo-name'>My Todos</h1>
        <AddTodo />

        
			{data.map((todo) => (
        <div className='list-group'>

				<TodoItems key={todo.id} id={todo.id} title={todo.title} desc={todo.desc} completed={todo.completed} />
        </div>

			))}
    
        <h2 className='todo-count'>Total Completed TODOs : {completeItems.length}</h2>
    </div>
    
  )
}

export default TodoList