import React, { useEffect, useState } from 'react'
import edit from '../src/assests/images/pencil.png'
import save from './assests/images/open-folder.png'
import './App.css'
import  { TodoProvider,TodoContext,useTodo} from './contexts/TodoContext'
import Todolist from './components/Todolist'
import TodoForm from './components/TodoForm'
const App = () => {
  const [todos,settodos] = useState([])
  const addtodos=(todo)=>{
    settodos((prev)=>[...prev,{id:Date.now(),...todo}])
  }
  const updatetodos =(id,todo)=>{
    settodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo : prevTodo)))
  }
  const removetodos = (id)=>{
    settodos((prev)=>prev.filter((prevTodo)=>(prevTodo.id!=id)))
  }
  const togglecomplete=(id)=>{
    settodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo)))
  }
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  useEffect(()=>{
    const todoo = JSON.parse(localStorage.getItem("todos"))
      if(todoo && todoo.length>0){
        settodos(todoo)
      }
  },[])
  console.log(todos)
  return (
   <TodoProvider value={{todos,addtodos,removetodos,updatetodos,togglecomplete}}>
     <div className='main flex justify-center items-center min-h-screen'>
        <div className='border border-white p-4 shadow-sm shadow-green-400'>
          <div>
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <Todolist todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
        </div>
   </TodoProvider>
  )
}

export default App