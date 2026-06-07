import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full overflow-x-auto flex flex-nowrap gap-10 p-6 w-2/4'>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} color={elem.color} id={idx} img = {elem.img} tag = {elem.tag}/>
      })}
    </div>
  )
}

export default RightContent