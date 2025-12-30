const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <img src={props.brandlogo} alt="" />
          <button>
            <img src="https://tse4.mm.bing.net/th/id/OIP.gHL_r4NyrG7P8tGxNbnNHAHaHa?pid=Api&P=0&h=180https://tse4.mm.bing.net/th/id/OIP.gHL_r4NyrG7P8tGxNbnNHAHaHa?pid=Api&P=0&h=180" />
            Save</button>
        </div>
        <div className='center'>
          <h3>{props.company}<span>{props.dateposted}</span></h3>
          <h2>{props.post}</h2>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>  
        </div>
        <div className='bottom'>

          <div>
            <h3>{props.pay}</h3>
            <p>Mumbai,India</p>
          </div>
          <button>Apply Now</button>

        </div>
      </div>

    </div>
  )
}

export default Card
