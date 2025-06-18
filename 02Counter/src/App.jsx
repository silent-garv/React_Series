
import './App.css'
import React, { useState } from 'react' //use to imnport react and useState hook

function App() {
  let [counter, setCounter] = useState(15) //hook 

  const addValue = () => { //arrow function to add value
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value :{counter}</h2>
    <button onClick ={addValue}> Add value </button>
    <br/>
    <button onClick ={removeValue}>Remove value </button>

    </>
  )
}
export default App
