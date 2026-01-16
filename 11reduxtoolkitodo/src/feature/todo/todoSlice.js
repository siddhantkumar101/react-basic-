import {createSlice,nanoid}from 'reduxjs/toolkit';//create unique ids like we used date.now in our previous todo
const initialState={
    todos:[{id:1,text:"hello world"}]
}
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,actions)=>{
            const todo={
                id:nanoid(),
                text:actions.payload,

            }
            state.todos.push(todo)

        },//state-current state and action gives some values like id
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!=action.payload)
        },

    }
})
export const{addTodo,removeTodo}=todoSlice.actions
export default todoSlice.reducer