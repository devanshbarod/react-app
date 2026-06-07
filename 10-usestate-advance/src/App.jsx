import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user:'kanha',age:17})

  const btnClicked = () => {
    // const newNum = {...num};
    // newNum.user='aman'
    // setNum(newNum)

    setNum(prev=>({...prev,age:50}))

    // const newNum = [...num]
    // newNum.push(99)
    // setNum(newNum)
    // console.log(newNum);
  }

  return (
    <div>
      <h1>{num.user} ,{num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App