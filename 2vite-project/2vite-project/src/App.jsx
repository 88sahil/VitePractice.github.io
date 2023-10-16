import React from 'react'
import Card from './components/Card'
import Person from './components/Person'
export const App = () => {
  return (
    <div>
      {Person.map(item=>(
        <Card 
            name={item.name}
            age={item.age}
        />
      ))}
    </div>
  )
}

export default App
