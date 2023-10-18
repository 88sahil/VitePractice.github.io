import React from 'react'
import './App.css'
import Person from './components/Person'
import Card from './components/Card'

const App = () => {
  return (
    <div className='flex flex-wrap'>
      {Person.map(i=>(
        <Card
          background={i.background}
        />
))}
</div>
  )
}

export default App