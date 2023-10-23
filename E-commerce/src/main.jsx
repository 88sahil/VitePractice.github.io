import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import shopcontextProvider from './Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <shopcontextProvider>
       <App />
    </shopcontextProvider>
    
  </React.StrictMode>,
)
