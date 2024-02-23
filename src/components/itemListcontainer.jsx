import React, { useState, useEffect } from 'react';
import ItemList from './itemList';
import { useParams } from 'react-router-dom';

const ItemListcontainer = ({greeting}) => {
  const [products, setProducts] = useState ([])
  const {cid} = useParams();
  useEffect(()  => {
    fetch("../public/data/productos.json")
    .then(response => response.json())
    .then (prods => {
      if (cid){
        const productosFiltrados = prods.filter(prod => prod.categoria == cid)
        setProducts(productosFiltrados)
      }else{
        setProducts(prods)
      }
       
    })
    .catch((error)  => console.log(error)) 
  }, [cid] )
  
  
  return (
      < >
       <div className='separaciondecard' >
        <ItemList  products ={products} />



      </div>
      
      </>
    );
}

export default ItemListcontainer;
