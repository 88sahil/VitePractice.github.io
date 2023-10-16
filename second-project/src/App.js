import React from 'react'
import './App.css'
import Person from './components/Person'
import Card from './components/Card'

const App = () => {
  return (
    <div className='flex flex-wrap'>
      {Person.map(i=>(
        <Card
          name={i.name}
          age={i.age}
        />
))}
</div>
  )
}

export default App