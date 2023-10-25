import React from 'react'

const Search = () => {
  return (
    <div className='mt-8'>
        <div className='w-full flex justify-center'>
            <input
                type='text'
                placeholder='search Items'
                className='w-10/12 px-4 py-2 border border-gray-300 rounded-xl'
            >
            </input>
        </div>
    </div>
  )
}

export default Search