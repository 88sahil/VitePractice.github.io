import React, { useContext } from 'react'
import { shopcontext } from '../../Context/Context'
import Item from '../item/Item'

const ShowCategary = (props) => {
  const {all_product} = useContext(shopcontext)
  return (
    <div>
      <div>
        <img src={props.banner} alt="nothing"></img>
      </div>
      <div>
        {/* {
          all_product.map((item,index)=>{
            if(item.category===props.category){
             return (<Item
                key={index}
                image={item.image}
                name={item.name}
                newprice ={item.new_price}

              />)
            }
          })
        } */}
      </div>
    </div>
  )
}

export default ShowCategary