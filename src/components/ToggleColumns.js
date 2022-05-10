import React from 'react'

export const ToggleColumns = (props) => {
  const onCheckboxClick = (e) => {
    // TODO: implement checkbox click handler
    const value = e.target.checked;
    const name = e.target.name;
    // [e.target.name] = value;
    console.log("onCheckboxClick:", value, name);
    props.onCheckboxClick(name, value);
  }

  // TODO: Bind handlers and props
  
  console.log("props.toggleColumns",props.toggleColumns)  
  return (
    <div className="toggle-columns">
      { 
        Object.entries(props.toggleColumns).map(([key,value]) => {
          return ( 
          <div key={key}>
            <label htmlFor={key}>
              {key}
            </label>
            <input
              id={key}
              name={key}
              type="checkbox" 
              onChange={onCheckboxClick}
              value={props.value}
              checked={value}/>
          </div>)
        })
      }
    </div>
  );
}
