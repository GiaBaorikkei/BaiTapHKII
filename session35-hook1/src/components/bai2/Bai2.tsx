import React from 'react'

export default function Bai2() {
    let products = {
        id: 1,
        Name: 'Coca Cola',
        Price: '1000 $',
        Quantity: 10,
    }
  return (
    <div>
      <h2>Thông tin sản phẩm</h2>
      <p>Id: {products.id}</p>
      <p>Name: {products.Name}</p>
      <p>Price: {products.Price}</p>
      <p>Quantity: {products.Quantity}</p>
    </div>
  )
}
