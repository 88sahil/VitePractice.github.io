import React, { useRef, useState } from 'react'
import circle from '../assets/images/circle.png'
import cross from '../assets/images/cancel.png'
let data = ["","","","","","","","",""]
const Tictoktoe = () => {
   
    let [count,setcount] = useState(0)
    const [lock,setlock] = useState(false)
    let titleref = useRef(null)
    let box0 = useRef(null)
    let box1 = useRef(null)
    let box2 = useRef(null)
    let box3 = useRef(null)
    let box4 = useRef(null)
    let box5 = useRef(null)
    let box6 = useRef(null)
    let box7 = useRef(null)
    let box8 = useRef(null)
    let boxarray = [box0,box1,box2,box3,box4,box5,box6,box7,box8]

    const toggle = (e,num) =>{
        if(lock){
            return 0;
        }
        if(count%2===0){
            e.target.innerHTML = `<img src=${circle} className='w-10 h-10' alt="nologo">`
            data[num] = "o"
            setcount(++count)
        }else
        if(count%2!==0){
                e.target.innerHTML = `<img src=${cross} width={50} height={50} alt="nologo">`
                data[num] = "x"
                setcount(++count)
        }
        checkwin();
        console.log(data)
    }
    const checkwin =()=>{
        if (data[0]===data[1] && data[1]===data[2] && data[2] !== ""){
            won(data[2])
        }else
        if (data[3]===data[4] && data[4]===data[5] && data[5] !== ""){
            won(data[5])
        }
        else if (data[6]===data[7] && data[7]===data[8] && data[8] !== ""){
            won(data[8])
        }
        else if (data[0]===data[3] && data[3]===data[6] && data[6] !== ""){
            won(data[6])
        }else if (data[1]===data[4] && data[4]===data[7] && data[7] !== ""){
            won(data[7])
        }else if (data[2]===data[5] && data[5]===data[8] && data[8] !== ""){
            won(data[8])
        }else if (data[0]===data[4] && data[4]===data[8] && data[8] !== ""){
            won(data[8])
        }
        else if (data[2]===data[4] && data[4]===data[6] && data[6] !== ""){
            won(data[6])
        }
    }
    const won =(winnner) =>{
        console.log(winnner)
        setlock(true)
        if(winnner==="o"){
            titleref.current.innerHTML = `<img src=${circle} width="50px" alt="nologo">`
        }else
        if(winnner==="x"){
            titleref.current.innerHTML = `<img src=${cross} width="50px"  alt="nologo">`
        }
    }
    const reset = ()=>{
        setcount(0)
        setlock(false)
        titleref.current.innerHTML =`<h1 className='font-bold text-xl text-white ' ref={titleref}>TikTocToe <span className='text-green-500 text-2xl'>React</span>`
        data = ["","","","","","","","",""]
        boxarray.map((e)=>{
            e.current.innerHTML=""
        })
    }
  return (
    <div className='min-h-screen w-full bg-black/60 flex justify-center items-center'>
       
        <div className=''>
            <div className='pb-4 flex' >
                <h1 className='font-bold text-xl text-white ' ref={titleref}>TikTocToe <span className='text-green-500 text-2xl'>React</span></h1>
            </div>
            <div className='flex mb-1 gap-1'>
                <div className='w-20 h-20 text-white bg-[#050A30] ' ref={box0} onClick={(e)=>toggle(e,0)}> </div>
                <div className='w-20 h-20 text-white bg-[#050A30]' ref={box1} onClick={(e)=>toggle(e,1)}> </div>
                <div className='w-20 h-20 text-white bg-[#050A30]' ref={box2} onClick={(e)=>toggle(e,2)}> </div> 
            </div>
            <div className='flex mb-1 gap-1'>
                <div className='w-20 h-20 text-white bg-[#050A30]' ref={box3} onClick={(e)=>toggle(e,3)}> </div>
                <div className='w-20 h-20 text-white bg-[#050A30]' ref={box4} onClick={(e)=>toggle(e,4)}> </div>
                <div className='w-20 h-20 text-white bg-[#050A30]' ref={box5} onClick={(e)=>toggle(e,5)}> </div> 
            </div>
            <div className='flex  gap-1'>
                <div className='w-20 h-20 text-white bg-[#050A30]' ref={box6} onClick={(e)=>toggle(e,6)}> </div>
                <div className='w-20 h-20 text-white bg-[#050A30]' ref={box7} onClick={(e)=>toggle(e,7)}> </div>
                <div className='w-20 h-20 text-white bg-[#050A30]' ref={box8} onClick={(e)=>toggle(e,8)}> </div> 
            </div>
            <div className='flex justify-center mt-4'>
            <button className='border-gradient text-[#4EF410] border border-black p-3 rounded-2xl' onClick={()=>reset()}>Reset</button>
            </div>
            
        </div>
    </div>
  )
}

export default Tictoktoe