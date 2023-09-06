import React from 'react'

export default function CarItem(props) {
    let item = props.item;
  return (
    <div className='col-md-6 border p-2 mt-3'>
        <h2>{item.car} {item.car_model}</h2>
        <div> price : {item.price}</div>
    </div>
  
  )
}
