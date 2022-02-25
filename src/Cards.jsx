function Card(props){

    return(
      <>
      <div className='cards'>
        <div className='card'>
          <img src={props.imgsrc} alt="Image" className='card__img'/>
          <div className='card__info'>
            <span className='card__category'>{props.title}</span>
            <h3 className='card__title'>{props.plname}</h3>
            <a href={props.link} target='_blank'>
              <button>{props.webname}</button>
            </a>
          </div>
        </div>
      </div>
    </>
    )
  }

  export default Card;