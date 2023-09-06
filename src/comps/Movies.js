import React, { useEffect, useState } from 'react'
import CarItem from './CarItem';

export default function Movies() {
  const [ar, setAr] = useState([]);

  useEffect(() => {
    doApi();
  }, []); 
  const doApi = async () => {
    const url = "https://myfakeapi.com/api/cars";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    const first15Cars = data.cars.slice(0, 15);
    setAr(first15Cars);
  }
  return (
    <div className='container'>
      <h1>List of Products :</h1>
      <div className='row '>
        {ar.map(item => (
          <CarItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  )
}
