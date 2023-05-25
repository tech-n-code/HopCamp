import React from 'react'
import './Tent_site.css'

const Individual_Lodging_site = () => {
    
  

  return (
    <div>
        <div className='lodging-title'> 
            <p>Lodging</p>
            <p>0 available</p>
            </div>
            <div className='lodging'>
                <img className='tentsite-2-img' src="" alt="" />
                <p>{lodgingData.demand}</p>
                <p>{lodgingData.instantBook}</p>
                <p>{lodgingData.name} </p>
                <p>{`${lodgingData.type} * ${lodgingData.capacity} ${lodgingData.rating} ${lodgingData.reviews}`}</p>
                <p>from {`$${lodgingData.regularPrice} $${lodgingData.dealPrice} / night` }</p>
                <p>for 4 guests</p>
                <p>{lodgingData.description}</p>
                <p>{lodgingData.availability}</p>
                <p></p>
                <p>{lodgingData.restrictions}</p>
                <Buttons /> 
            </div>
    </div>
  )
}

export default Individual_Lodging_site