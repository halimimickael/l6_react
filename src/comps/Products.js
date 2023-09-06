import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

export default function Products() {
  const [ar, setAr] = useState([]);

  useEffect(() => {
    doApi();
  }, []); // Utilisez une dépendance vide pour que useEffect s'exécute une seule fois

  const doApi = async () => {
    const url = "https://monkeys.co.il/api2/shop.php";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    setAr(data);
  }

  return (
    <div className='container'>
      <h1>List of Products :</h1>
      <div className='row '>
        {ar.map(item => (
          <ProductItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  )
}
