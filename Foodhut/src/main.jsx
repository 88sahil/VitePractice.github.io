import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FoodhutContextProvider from './Context/FoodhutContect.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FoodhutContextProvider>
    <App />
  </FoodhutContextProvider>
    
)
