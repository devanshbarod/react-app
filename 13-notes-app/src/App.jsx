import React, { useState } from 'react'


const App = () => {


  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({title,detail})
    setTask(copyTask)

    setTitle('')
    setDetail('')
  }

  const deleteNote = (idx) =>{
    const copyTask = [...task];
    copyTask.splice(idx,1)

    setTask(copyTask)
  }

  

  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 p-10 items-start flex-col '>
            
            <h1 className='text-4xl font-bold'>Add Notes</h1>

            <input 
            type="text" 
            className='px-5 w-full py-2 font-medium outline-none border-2 rounded'
            placeholder='Enter Notes Heading ' 
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
            />

            <textarea 
            type="text" 
            className='px-5 w-full h-32 flex font-medium items-start outline-none flex-row py-2 border-2 rounded'
            placeholder='Write Details' 
            value={detail}
            onChange={(e)=>
            {
              setDetail(e.target.value)
            }
            }
            />

            <button className='bg-white active:scale-95 font-medium outline-none w-full text-black px-5 py-2 rounded'>Add Notes</button>
        
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10 '>
        <h1 className='text-4xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto scrollbar-none'>
          {
            task.map(function(elem,idx){
              return <div key={idx} className="flex justify-between flex-col items-start relative h-52 bg-cover w-40 text-black pt-9 pb-4 px-4 rounded-2xl bg-[url('data:image/jpeg;base64,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')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-4 leading-tight text-sm font-medium text-gray-500'>{elem.detail}</p>

              </div>            
                <button onClick={()=>{
                  deleteNote(idx)
                  }} className='w-full cursor-pointer active:scale-95 bg-red-400 text-white py-1 text-xs rounded font-bold text-white'>delete</button>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App