import React, { useState } from 'react'

import '../styles/Search.css';
import { ToggleColumns } from './ToggleColumns';
import { ProductList } from './ProductList';
import { FilterForm } from './FilterForm';

import Products from './../assets/products.json'

export const Search = (props) => {
  const [price, setPrice] = useState({ priceFrom: '', priceTo: '' });

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceInputChange = (name, value) => {
    if(name === "priceFrom"){
      setPrice({priceFrom: value, priceTo: price.priceTo})
    }
    if(name === "priceTo"){
      setPrice({priceTo: value, priceFrom: price.priceFrom})
    }
    filterProducts(name, value)
  }

  const onCheckboxClick = (name, value) => {
    let newColumns = {...columns};

    for (let [k, val] of Object.entries(newColumns)) {
      if(k === name){
      newColumns[name] = value;
    }
    }

    setColumns({ 
      id: newColumns.id,
      name: newColumns.name,
      department: newColumns.department,
      price: newColumns.price,
      currency: newColumns.currency
    })
  }

  const [prod, setProd] = useState({Products})

  const filterProducts = (name, value) => {
    let priceFrom = price.priceFrom
    let priceTo = price.priceTo
    if(name === "priceFrom"){
      priceFrom = value
      // console.log(priceFrom)
    }
    if(name === "priceTo"){
      priceTo = value;
      // console.log(priceTo)
    }

    const products = prod.Products;
    // console.log(prod.Products)

    let displayedProducts = [];
    // console.log({displayedProducts});

    const filteredProducts = products.forEach(product => {
        if (products && product.price > priceFrom && product.price < priceTo) {
          displayedProducts.push(product)
        }
    })
    setProd(oldProd => ({...oldProd, ...displayedProducts}))
  }

  return (
    <div className="Products">
      <FilterForm
        onPriceInputChange={onPriceInputChange} />

      <ToggleColumns
        onCheckboxClick={onCheckboxClick}
        toggleColumns={columns} />

      <ProductList
        priceFrom={price.priceFrom}
        priceTo={price.priceTo}
        products={prod}
        initialProducts={Products}
        productColumns={columns} />
    </div>
  );
}
export default Search;
