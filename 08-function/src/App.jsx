import React from 'react'

const App = () => {

  function inputChange(){
    console.log('user is typing...');
  }

  return (
    <div>
      <div 
      onMouseMove={()=>{
        console.log('nachoooo');
      }} className='box'>

        
      </div>
    </div>
  )
}

export default App