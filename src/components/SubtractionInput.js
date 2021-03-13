import React, { useState } from 'react'

const SubtractionInput = ({ subtractionList, setSubtractionList, setIsSubtracted}) => {
  const [subtractionInput, setSubtractionInput] = useState({})

  const onInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setSubtractionInput({ ...subtractionInput, [name]: value })

  }
  
  const onInputSubmit = () => {
    if (subtractionInput.height === undefined || subtractionInput.width === undefined) return alert('Required fields missing')
    setSubtractionList([subtractionInput, ...subtractionList])
  }

  return (
      <div onChange={onInputChange} >
        <div className="DWO-selection-container">
          <input type="radio" radio="door" value="door" name="name" /> Door
          <input type="radio" radio="window" value="window" name="name"/> Window
          <input type="radio" radio="other" value="other" name="name" /> Other
          <div className="close-button-container">
            <div className="close-subtraction-button" onClick={() => setIsSubtracted(false)}> X </div>
          </div>
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
