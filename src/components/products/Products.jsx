import React, { useEffect, useState } from 'react'


export default function Products() {
   
    let [Products,setProducts]=useState([]);

    const getData= async()=>{
       let respons= await fetch('https://fakestoreapi.com/products');
       let data = await respons.json();
       setProducts(data);
    }
    useEffect(()=>{
        getData();
    },[])

  return (
    <div className='row'>
     {
    Products.map((ele)=>{
        return <div className='col-md-3' key={ele.id}>
            <h2>{ele.title}</h2>
            <img src={ele.image} className='img-fluid' alt="Products image" />
            </div>
    })
     }   
    </div>
  )
}
