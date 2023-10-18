import React from 'react'

const Input = ({
    label,
    amount,
    onAmountchange,
    oncurrencyChange,
    currencyOptions =[],
    selectcurrency = "usd",
    amountdisable = false,
    currencydisable = false,
    className=''
}) => {

  return (
    <div className={' bg-white w-96 rounded-xl shadow-md  flex '}>
        <div className='w-1/2 p-3 flex flex-wrap justify-start text-left'>
            <label className='text-black/40 inline-block mb-2'>{label || "label"}</label>
            <input 
            type='number'
            disabled={amountdisable}
            value={amount}
            onChange={(e)=>onAmountchange&&onAmountchange(Number(e.target.value))}
            ></input>
        </div>
        <div className='nan w-1/2 flex flex-wrap justify-end text-right p-3'>
            <p className='w-full text-black/40 mb-2'>CurrencyType</p>
            <select className='rounded-lg px-1 py-2 bg-gray-400 mr-2  cursor-pointer outline-none'
                value={selectcurrency}
                onChange={(e)=>oncurrencyChange&&oncurrencyChange(e.target.value)}
                disabled={currencydisable}
            >
                {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
            </select>
                
        </div>
    </div>
  )
}

export default Input