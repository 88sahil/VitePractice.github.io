import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

const TodoForm = () => {
    const [todo,settodo] = useState("")
    const {addtodos} = useTodo();
    const add = (e)=>{
        e.preventDefault();
        if(!todo) return;
        addtodos({todo,completed:false})
        settodo("")
        console.log(todo)
    }
  return (
    <form onSubmit={add}>
           <div className='pb-4 border-white'>
           <input
                type='text'
                placeholder='enter todo'
                value={todo}
                onChange={(e)=>settodo(e.target.value)}
                className='py-2 w-[400px] px-3'
            >
            </input>
            <button type='submit' onClick={add} className='bg-green-600 px-2 py-2 duration-200 active:scale-90'>Add</button>
           </div>
    </form>
  )
}

export default TodoForm