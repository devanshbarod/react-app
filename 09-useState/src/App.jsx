import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);
  const [username, setUsername] = useState("sarthak");
 
  function changeNum(){
    setNum(30)
    setUsername('aman')
  }

  function increaseNum(){
    setNum(num+1)
  }

  function decreseNum(){
    setNum(num-1)
  }

  return (
    <div>
      <h1>Value of a is {num} <br /> username is {username} </h1>
      <button onClick={changeNum}>Click</button>
      
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreseNum}>decrease</button>
    </div>
  )
}

export default App