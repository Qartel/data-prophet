import React from 'react'

export const FilterForm = (props) => {

  const onPriceInputChange = (e) => {
    // TODO: implement handler

    const value = e.target.value;
    let name = e.target.name;
    props.onPriceInputChange(name, value)
  }

  // TODO: bind handlers and props
  return (
    <div>
      <label htmlFor="priceFrom">Price From:</label>
      <input
        type="number"
        id="priceFrom"
        name="priceFrom"
        placeholder="Price from..." 
        onChange={onPriceInputChange}
        value={props.value}/>
      <label htmlFor="priceTo">Price To:</label>
      <input
        type="number"
        id="priceTo"
        name="priceTo"
        placeholder="Price to..." 
        onChange={onPriceInputChange}
        value={props.value}/>
    </div>
  )
}
