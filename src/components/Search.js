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

  const [prod, setProd] = useState({Products})

  const onPriceInputChange = (name, value) => {
    // TODO: implement price change handler
    if(name === "priceFrom"){
      setPrice({priceFrom: value, priceTo: price.priceTo})
    }
    if(name === "priceTo"){
      setPrice({priceTo: value, priceFrom: price.priceFrom})
    }
    filterProducts(name, value)
  }

  const onCheckboxClick = (name, value) => {
    // TODO: implement checkbox click handler

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

  const filterProducts = (name, value) => {
    let priceFrom = price.priceFrom
    let priceTo = price.priceTo
    if(name === "priceFrom"){
      priceFrom = value
    }
    if(name === "priceTo"){
      priceTo = value;
    }
    // TODO: implement handler for filtering products by price range

    const filteredProducts = prod.Products.filter(price => price < priceTo && price > priceFrom)
    console.log("filteredProducts",filteredProducts)
    setProd({filteredProducts})
  }

  let displayedProducts = [];
  displayedProducts.push(prod)

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
        products={displayedProducts}
        productColumns={columns} />
    </div>
  );
}

export default Search;
