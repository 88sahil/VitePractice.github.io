import React, { useState } from 'react'
import edit from '../src/assests/images/pencil.png'
import save from './assests/images/open-folder.png'
import './App.css'
import  { TodoProvider,TodoContext,useTodo} from './contexts/TodoContext'
const App = () => {
  const[button,setbutton] = useState(true)
  const [todo,settodo] = useState([])
  const addtodos =(todos)=>{
    settodo((prev)=>[{id:Date.now(),...todo},...prev])
  }
  const removetodos=(id,todo)=>{
    settodo((prev)=>prev.filter((todo)=>))
  }
  const updatetodos =()=>{}
  const togglecomplete =()=>{}
  return (
   <TodoProvider value={{todo,addtodos,removetodos,updatetodos,togglecomplete}}>
     <div className='main flex justify-center items-center min-h-screen'>
      <div className='border border-white p-4 shadow-md shadow-white'>
        <div>
          {/* div for input */}
          <div className=' pb-4 border-b border-gray-100'>
            <input type="text" placeholder='enter todo' className='w-[400px] px-4 py-2'></input>
            <button className='text-white bg-green-600 py-2 px-2 duration-200 active:scale-90'>Add</button>
          </div>

        </div>
          <div className='p-8'>
            {/* button for save */}
          {
            button ? (
              <button className='bg-black/40 px-3 py-2 shadow-md rounded-md' onClick={updatetodos}><img src={edit} className='w-8 h-8'></img></button>
            ):(
              <button className='bg-black/40 px-3 py-2 shadow-md rounded-md' onClick={updatetodos}><img src={save} className='w-8 h-8'></img></button>
            )
          }
          </div>
      </div>
    </div>
   </TodoProvider>
  )
}

export default App