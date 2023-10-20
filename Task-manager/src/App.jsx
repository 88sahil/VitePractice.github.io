import React from 'react'
import { useState } from 'react'


const App = () => {
  const [Title,setTitle] = useState("")
  const [discri,setdiscri] = useState("")
  const [item,setitem] = useState(
    [
      {
        id:1,
        title:"default title",
        discriprition:"default discrpition"
      }
    ]
  )

  function handletitle(e){
    setTitle(e.target.value)
  }
  function handlediscri(e){
    setdiscri(e.target.value)
  }
  function handlesubmit(e){
    e.preventDefault()
    if(!Title && !discri){
      alert("Enter something")
    }else{
      const allinputdata = {
        id:new Date().getTime().toString(),
        title:Title,
        discriprition:discri,
      };
      setitem([allinputdata,...item])
    }
    console.log(item)
  }
  function handledelete(index){
    const updateditem = item.filter((ele)=>{
      return index !== ele.id
    });
    setitem(updateditem)
  }
  function handeledit(){
      let edititem = item.find((ele)=>{
        return ele.id === id;
      });
      setTitle(edititem.name)
      setdiscri(edititem.discriprition)
      se
  }
  return (
    <>
    <div className='flex px-4 gap-4 w-auto flex-col justify-center items-center text-left shadow-md pb-5'>
      <a className=''>Task</a>
      <input className=' w-[800px] border border-black px-3 p-2'  
        type="text"
        name="title"
        id="title"
        placeholder='title'
        onChange={handletitle}
        value={Title}
      />
      <a>Discription</a>
      <input className=' w-[800px] border border-black px-3 py-2'
        type="text"
        name="title"
        id="title"
        placeholder='discription'
        onChange={handlediscri}
        value={discri}
      />
      <button className='px-2 py-2 bg-blue-500 rounded-lg text-white active:scale-90'
        onClick={handlesubmit}
      >Submit</button>   
    </div>
    <div className='w-full px-5 mt-16'>
        {
          item.map((ele)=>{
            return(
              <div className='row w-auto border rounded shadow p-3 mb-3 bg-white' key={ele.id}>
              <div className='flex justify-between w-100 '>
                  <div className=''>
                      <h4 className='font-bold'>{ele.title}</h4>
                      <p className='font-thin text-[15px] font-sans'>{ele.discriprition}</p>
                       
                  </div>
                  <div className='flex items-center'>
                  <button className='bg-blue-500 px-2 py-1 text-white rounded-lg ' onClick={()=>handeledit(ele.id)}>Edit</button>
                       <button className='bg-red-600 ml-2 px-2 py-1 text-white rounded-lg' onClick={()=>handledelete(ele.id)}>Delete</button>
                  </div>
                 
              </div>
      
          </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App