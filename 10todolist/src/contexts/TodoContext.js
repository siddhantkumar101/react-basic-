import {createContext,useContext} from 'react';
export const TodoContext=createContext({
    todos:[//is bar viarable to do ke andar ek array of objects pass kar diye nothing new then last time
        {id:1,
        todo:'todo message',
        completed:false
        }
    ],
    addTodo:(todo)=>{//to do is  a parameter. andf addTodo is a function name

    },
    updatetodo:(id,todo)=>{},//meathod ki functionality mai app.jsx ke andar hee likh dunga but values yeha se lenge isss context se in any component
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{}

});

export const useTodo=()=>{
    return useContext(TodoContext);
}
export const TodoProvider=TodoContext.Provider;