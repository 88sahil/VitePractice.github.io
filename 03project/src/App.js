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
   <div className=' main w-full  flex justify-center flex-wrap flex-col bg-green-500'>
               <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                ></form>
     <div className='mb-4 relative'>
      <Input
        label={from}
        amount={amount}
        currencyOptions={option}
        oncurrencyChange={(currency)=>setFrom(currency)}
        selectcurrency={from} 
        onAmountchange={(amount)=>setamount(amount)}
      />
     </div>
     <button onClick={swap} className='absolute px-2 py-3 mb-12 shadow-md-white bg-blue-600 rounded-md'>swap</button>
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
     <button onClick={convert} className='w-60 bg-blue-600 mt-6 py-2 rounded-none'>Convert {from} to {to}</button>
   </div>
  )
}

export default App