import React, { useContext } from 'react'
import { Shopcontext } from '../../Context/Context'
import Cart from './Cart'
import crosslogo from '../../assets/cart_cross_icon.png'

const CartItem = () => {
    const {all_product,cartitem,removetocart,gettotalamout} = useContext(Shopcontext)
  return (
    <div>
       <div className='flex gap-16 justify-center mt-8 '>
        <p className='w-28'>Products</p>
        <p className='w-28 text-center'>Title</p>
        <p className='w-28 ml-4'>price</p>
        <p className='w-28'>quantity</p>
        <p className='w-28 pl-4'>Total</p>
        <p className='w-28 '>remove</p>
       </div>
       {
        <div className='p-8'>
            {
                all_product.map((ele,index)=>{
                    if(cartitem[ele.id]>0){
                        return(
                            <div className='flex items-center mt-4 gap-[70px] justify-center' key={index}>
                                <div className='w-28'><img src={ele.image} alt="nan" className='h-24 w-20'></img></div>
                                <p className='w-28'>{ele.name}</p>
                                <p className='w-28'>{ele.new_price}</p>
                                <p className='w-28'>{cartitem[ele.id]}</p>
                                <p className='w-28'>{ele.new_price*cartitem[ele.id]}</p>
                                <div className='w-28'><img src={crosslogo} alt="nologo" onClick={()=>{removetocart(ele.id)}}></img></div>
                            </div>
                        )
                    }
                })
            }
        </div>
       }
       <div>
       <div className='border-t border-black px-44 py-4'>
        <div>
            <p>Items total:<span>${gettotalamout()}</span></p>
        </div>
         </div>
       </div>

    </div>
  )
}

export default CartItem