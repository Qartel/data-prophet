import React, { useState, useMemo } from 'react'

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

  const filteredProducts = useMemo(() => Products.filter(
    p => (!price.priceFrom || p.price > price.priceFrom) 
    && (!price.priceTo || p.price < price.priceTo)), [Products, price]);

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
        products={filteredProducts}
        productColumns={columns} />
    </div>
  );
}
export default Search;
