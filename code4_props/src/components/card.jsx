const Card = (name) => {
  return (
    <div className='card'>
      <img src={name.img} alt=""/>
      <h1>{name.user},{name.age}</h1>
      <p>Want to learn react?</p>
      <button>view profile</button>
    </div>

  )
}

export default Card
