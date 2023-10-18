import React, { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrency'
import Input from './components/Input'
const App = () => {
  const [amount,setamount] = useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setto]  =useState("inr")
  const [convertedamount,setconvertedamount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const option = Object.keys(currencyInfo)
  console.log(option)
  const swap=()=>{
    setFrom(to)
    setto(from)
    setamount(convertedamount)
    setconvertedamount(amount)
  }
  const convert=()=>{
    setconvertedamount(amount * currencyInfo[to])
  }
  return (
   <div className=' main w-full  flex justify-center flex-wrap flex-col' style={{backgroundImage:`url(https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}>
               <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                ></form>
      <div className='div1 p-4'>
      <div className='relative'>
      <Input
        label={from}
        amount={amount}
        currencyOptions={option}
        oncurrencyChange={(currency)=>setFrom(currency)}
        selectcurrency={from} 
        onAmountchange={(amount)=>setamount(amount)}
      />
       </div>
       <div className='flex justify-center m-2'>
       <button onClick={swap} className='px-3 py-2 text-black bg-blue-600 rounded-md'>swap</button>
       </div>
        
     <div>
      <Input
        label={to}
        amount={convertedamount}
        currencyOptions={option}
        oncurrencyChange={(currency)=>setto(currency)}
        selectcurrency={to}
        amountdisable
      />
     </div>
     <div className='m-3 flex justify-center'>
     <button onClick={convert} className='w-60 bg-blue-600  py-2 rounded-md '>Convert {from} to {to}</button>
     </div>
     
   </div>
</div>
     
  )
}

export default App