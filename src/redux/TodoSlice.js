import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice=createSlice({
    name:"Todo",
    initialState:[
        {id:1,title:"My todo",desc:"My default todo.",completed:true},
    ],
    reducers:{
        addTodo:(state,action)=>{
            const id=state.length + 1
            const newTodo={
                id:id,
                title:action.payload.title,
                desc:action.payload.desc,
                completed:false
            }
            state.push(newTodo)
        },

        deleteTodo:(state,action)=>{
            const id=action.payload.id
            alert(id)
            return state.filter((item)=>{
                return id!==item.id

            })
        },

        setCompleted:(state,action)=>{
            const id=action.payload.id
            return state.map((item)=>{
                return id===item.id?{id:item.id,title:item.title,desc:item.desc,completed:!action.payload.completed}:item
            })
        }

    }
})

export const{addTodo,deleteTodo,setCompleted}=TodoSlice.actions
export default TodoSlice.reducer;