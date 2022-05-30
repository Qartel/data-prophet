import React from 'react'

export const ToggleColumns = (props) => {
  const onCheckboxClick = (e) => {
    const value = e.target.checked;
    const name = e.target.name;
    console.log("onCheckboxClick:", value, name);
    props.onCheckboxClick(name, value);
  }
  
  console.log("props.toggleColumns",props.toggleColumns)  
  return (
    <div className="toggle-columns">
      { 
        Object.entries(props.toggleColumns).map(([key,value]) => {
          return ( 
          <div key={key}>
            <input
              id={key}
              name={key}
              type="checkbox" 
              onChange={onCheckboxClick}
              value={props.value}
              checked={value}/>
            <label htmlFor={key}>
              {key}
            </label>
          </div>)
        })
      }
    </div>
  );
}
