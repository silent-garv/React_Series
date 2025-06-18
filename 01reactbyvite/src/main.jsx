import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function  MyApp(){
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  )

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>
)
