import React, { useContext } from 'react'
import { FoodhutContext } from '../../Context/FoodhutContect'
import { useState } from 'react'
const Add = () => {
    const {addrestro,setaddrestro} = useContext(FoodhutContext)
    const [name,setname] = useState("")
    const [image,setimage] = useState("")
    const [rating,setrating] = useState("")
    const [item,setitem] = useState({
        id:"",
        name:"",
        bg:"",
        rating:"",
        category:"food"
    })

    const add = ()=>{
        if(!name && !image && ! rating){
            alert("pleace fill data")
        }
            setitem({
            id: new Date().getTime().toString(),
            name:`${name}`,
            bg:`${image}`,
            rating:`${rating}`,
            category:"food"
        })

        setaddrestro({...addrestro,item})
        console.log(data)
    }
  return (
    <div className='mt-16'>
        <div className='flex justify-center'>
            <div>
            <div className='mb-4'>
                <input type='text' placeholder='Restaurant name' className='px-2 py-2 w-96 border border-black' value={name} onChange={(e)=>{setname(e.target.value)}}></input>
            </div>
            <div>
            <div className='mb-4'>
                <input type='text' placeholder='ImageLink' className='px-2 py-2 w-96 border border-black' value={image} onChange={(e)=>{setimage(e.target.value)}}></input>
            </div>
            <div className='mb-4'>
                <input type='text' placeholder='Rating' className='px-2 py-2 w-96 border border-black' value={rating} onChange={(e)=>{setrating(e.target.value)}}></input>
            </div>
            </div>
            <button className='w-96 bg-green-500 px-2 py-2 text-white' onClick={add}>Add</button>
            </div>
            {
                
            }
        </div>
    </div>
  )
}

export default Add