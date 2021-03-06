import React, { useState } from 'react'

const SubtractionInput = ({ subtractionList, setSubtractionList, setIsSubtracted}) => {
  const [subtractionInput, setSubtractionInput] = useState({})

  const onInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setSubtractionInput({ ...subtractionInput, [name]: value })

  }
  
  const onInputSubmit = () => {
    setSubtractionList([...subtractionList, subtractionInput])
    setIsSubtracted(false)
  }

  return (
      <div onChange={onInputChange} >
        <div className="DWO-selection-container">
          <input type="checkbox" checkbox="door" value="door" name="name" checked/>
          <label htmlFor="door">Door</label>
        <input type="checkbox" checkbox="window" value="window" name="name"/>
          <label htmlFor="window">Window</label>
        <input type="checkbox" checkbox="other" value="other" name="name"/>
          <label htmlFor="other">Other</label>
        </div>
        <input 
          type="number"
          className="subtraction-input"
          name="height" 
          placeholder="height" 
          autoFocus={true}
        />
        <input 
          type="number"
          className="subtraction-input"
          name="width" 
          placeholder="width" 
        />
        <input type="button" value="+ subtraction" onClick={onInputSubmit}/>
      </div>
  )
}

export default SubtractionInput
