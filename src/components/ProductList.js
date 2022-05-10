import React from 'react'
import Products from './../assets/products.json'

export const ProductList = (props) => {
  // TODO: display appropriate header
  // TODO: display only chosen columns
  // TODO: display products as new table rows
  
  let newProductList = props.productColumns
  // let displayedProducts = props.products

  return (
    <div id="product-list">
      <header>
        <strong>Product List ({Object.keys(Products).length} items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Price</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
        {Object.keys(Products).map((product, i) => (
          <tr key={i}>
            <td>{newProductList.id === true ? Products[product].id : ''}</td>
            <td>{newProductList.name === true ? Products[product].name : ''}</td>
            <td>{newProductList.department === true ? Products[product].department : ''}</td>
            <td>{newProductList.price === true ? Products[product].price : ''}</td>
            <td>{newProductList.currency === true ? Products[product].currency : ''}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
