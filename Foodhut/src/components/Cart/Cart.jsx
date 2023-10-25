import React, { useContext } from 'react'
import { FoodhutContext } from '../../Context/FoodhutContect'

const Cart = () => {
  const {Menu,addtocart,removetocart,cart,totalamount} = useContext(FoodhutContext)
  const tax = totalamount()*0.05
  return (
    <div className='flex justify-center mt-10 gap-10'>
        <div className='shadow-xl p-8'>
        {
          Menu.map((ele)=>{
            if(Number(cart[ele.id])>0){
              return(
                <div className='flex items-center gap-8'>
                  <div className='mt-4 flex items-center gap-4  '>
                  <img src={ele.image} className='h-24 w-36 rounded-xl'></img>
                  <a className='font-bold'>{ele.name}</a>
                  </div>
                  <div className='flex gap-1 items-center mt-3'>
                    <button className='bg-red-500 px-3 py-1'onClick={()=>{removetocart(ele.id)}}>-</button>
                    <button className='bg-green-500 py-1 px-3'>{cart[ele.id]}</button>
                    <button className='bg-red-500 px-3 py-1' onClick={()=>{addtocart(ele.id)}}>+</button>
                  </div>
                  <div className='flex items-center mt-3'>
                    <a>&#8377;{ele.price}</a>
                  </div>
                  <div className='mt-3'>
                    {cart[ele.id]}
                  </div>
                  <div className='mt-3'>
                    {cart[ele.id]*ele.price}
                  </div>
                </div>
              )
            }
          })
        }
        </div>
        <div>
          <div className='w-60'>
            <div className='border-b border-black py-4'>
            <div className='flex justify-between'>
              <a>Items total</a>
              <a className='font-bold'>&#8377;{totalamount()}</a>
            </div>
            <div className='flex justify-between'>
              <a>Taxes</a>
              <a className='font-bold'>&#8377;{tax}</a>
            </div>
            </div>
            <div className='flex justify-between pt-2'>
              <a>Grand Total</a>
              <a className='font-bold'>&#8377;{totalamount()+tax}</a>
            </div>
            <div className='mt-4'>
            <button className='w-full bg-red-500 px-2 py-2 text-white shadow-xl rounded-lg'>Pay <span>&#8377;{totalamount()+tax}</span></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cart