import React from 'react'

export default function ProductItem(props) {
    let item = props.item;
  return (
    <div className='col-md-4 border p-2 mt-3'>
        <h2>{item.name}</h2>
        <div> category : {item.cat}</div>
        <div> price : {item.price}</div>
    </div>
    
  )
}
