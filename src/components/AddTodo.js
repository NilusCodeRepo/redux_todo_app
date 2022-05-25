import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/TodoSlice'


const AddTodo = () => {
    const[value,setValue]=useState({
        title:"",
        desc:""
    })
    const dispatch=useDispatch()

    const handleChange=(event)=>{
        const{name,type,value}=event.target
        setValue(preVal=>{
            return{
                ...preVal,
                [name]:value,


            }
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        dispatch(
            addTodo({
               title:value.title,
               desc:value.desc, 
            })

        )
        setValue("")

    }
  return (
    <div className='Add-container'>
        <form onSubmit={handleSubmit}>
            <div className='todo-input'>
            <label>Title</label>    
            <input
            type="text"
            name="title"
            placeholder="Add Todo..."
            value={value.title}
            onChange={handleChange}             
            />
            </div>

            <div className='todo-input'>
                <label>Description</label>
                <input 
                type="text"
                placeholder='Add description...'
                name="desc"
                value={value.desc}
                onChange={handleChange}
                />

            </div>

            <button className='btn-submit'>SUBMIT</button>
        </form>
    </div>
  )
}

export default AddTodo