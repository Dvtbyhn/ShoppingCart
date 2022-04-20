import React from 'react'

export default function Product( props ) {

    const  {product ,onAdd} = props
  return (
    <div>
        <img className='small' src={product.image} alt={product.name} ></img>
        <h2>{product.name}</h2>
        <div>${product.price}</div>
        <div>
            <button onClick={() => onAdd(product)} >Sepete Ekle</button>
        </div>
    </div>
  )
}
