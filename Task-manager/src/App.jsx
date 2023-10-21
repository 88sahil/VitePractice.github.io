import React, { useState } from 'react'

const App = () => {
  const [title,settitle] = useState("")
  const [desc,setdesc] = useState("")
  const [showform,setshowform] = useState(false)
  const [shownew,setshownew] = useState(true)
  const [showList,setshowList] =  useState(true)
  const [isedit,setisedit] = useState(null)
  const [isnew,setisnew] = useState(false)
  const [togglesubmit,settoglesubmit] = useState(true)
  const [showdelete,setshowdelete] = useState(false)
  const [showdeletemsg,setshowdeletemsg] = useState(false)
  const [item,setitem] = useState([{
    id:0,
    title:"default",
    desc:"default"
  },])
  function handleadd(){
    setshowList(false)
    setshownew(false)
    setshowform(true)
    setisnew(true)
  }
  function handleNew(e){
    setshowList(true)
    setshownew(true) 
    e.preventDefault();
    if(!title || !desc){
      alert("enter something")
      setshowList(false)
    }else if(title && ! togglesubmit){
      setitem(
        item.map((ele)=>{
          if(ele.id === isedit){
            return {...ele,name:title,desc:desc}
          }
          return ele
        })
      );
      settitle("")
      setdesc("")
      settoglesubmit(true)
      setshowform(false)
      setshowdelete(true)
    }
    else{
        const newItem = {
          id:new Date().getTime().toString(),
          title:title,
          desc:desc
        }
        setitem([newItem,...item])
        settitle("")
        setdesc("")
        setshowform(false)
        setshowdelete(true)
        settoglesubmit(false)
    }
  }
  function handledelete(id){
    const updateitem = item.filter((ele)=>{
      return ele.id !== id;
    })
    setshowdeletemsg(true)
    setTimeout(()=>{
      setshowdeletemsg(false)
      setitem(updateitem)
    },1500)
  }
  function handleedit(id){
    setshowform(true)
    setshowList(false)
    setisedit(true)
    setisnew(false)
    settoglesubmit(false)
    setshownew(false)
    const editeditem = item.find((ele)=>{
       return ele.id === id
    })
    settitle(editeditem.title)
    setdesc(editeditem.desc)
  }
  
  return (
    <>
     {
      shownew ? (
        <div className='w-auto h-auto sha'>
          <div className='flex w-full justify-end'>
            <button className='mr-16 px-2 py-2 shadow-inner shadow-slate-100 bg-blue-700 rounded-lg text-white active:scale-95'
              onClick={handleadd}
            >New</button>
          </div>
        </div>
      ): (
        ""
      )}
      {
        showform ? (
          <div className='flex items-center flex-col'>
            <div className=' shadow-xl p-8'>
                <h2 className='text-xl font-extrabold text-center pb-4'>{togglesubmit ? ("Add new Item"):("Edit item")}</h2>
            <div className=''>
              <label>Task:</label>
              <br/>
              <input
                type='text' 
                value={title}
                onChange={(e)=>settitle(e.target.value)}
                placeholder='title'
                className='border border-gray-600 border-solid px-2 py-3 mt-2 w-[500px] rounded-sm shadow-md'
              />
            </div>
            <div className='mt-5'>
            <label>Disciption:</label>
              <br/>
              <input
                type='text' 
                value={desc}
                onChange={(e)=>setdesc(e.target.value)}
                placeholder='Discription'
                className='border border-gray-600 border-solid px-2 py-3 mt-2 w-[500px] rounded-sm shadow-md'
              />
            </div>
            <div className='mt-5 flex gap-4'>
              {
                isedit ? (
                  <button className='bg-red-600 rounded-md px-2 py-1 text-white border-none outline-none active:scale-90' onClick={handleNew}>Update</button>
                ):("")
              }
            {
              isnew ? (
                <button className='border-red-600 border  rounded-md px-2 py-1 active:scale-90' onClick={handleNew}>Submit</button>
              ):("")
            }
            </div>
            </div>

            
          </div>
        ):("")
      }
     {
      showList? (
        <div className=''>
          {
            showdeletemsg ? (
                <p className='text-red-600 text-center'>Task delete successfully</p>
            ) : ("")
          }
        <div className='mt-16 p-4'>
          {
            item.map((ele,index)=>{
              return(
                <div className='flex border border-solid border-gray-400 mb-4 px-2 py-4 shadow-md justify-between items-center' key={ele.id}>
                  <div className=''>
                      <h1 className='text-xl font-bold'>{ele.title}</h1>
                      <p className='text-[12px] pt-2'>{ele.title}</p>
                  </div>
                  <div className='flex gap-8 pr-4'>
                    <button className='border border-blue-800 px-3 py-2 rounded-lg shadow-inner shadow-black shadow-sm active:scale-90'
                      onClick={()=>{
                        handleedit(ele.id)
                      }}
                    >Edit</button>
                    {
                      showdelete ? (
                        <button
                          className='bg-red-500 px-2 py-2 text-white rounded-lg active:scale-90'
                          onClick={()=>handledelete(ele.id)}
                        >Delete</button>
                      ):("")
                    }
                  </div>
                </div>
                
              )
            })
          }
        </div>
      </div>
      ):("")
     }
    </>
  )
}

export default App