import React from 'react' 

const Card = (props) => {
  console.log(props);
  return (
    <div>
      <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam assumenda dolorem sunt, recusandae perferendis veniam, eum iste, laudantium fugit sed corporis hic tempora unde expedita nam harum. Voluptatem, ut!</p>
        <button>view profile</button>
      </div>
    </div>
  )
}

export default Card