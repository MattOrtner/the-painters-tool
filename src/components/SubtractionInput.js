import React, { useState } from 'react'

const SubtractionInput = ({ subtractFromTotal, subtractionList, setSubtractionList, setIsSubtracted}) => {
  const [subtractionInput, setSubtractionInput] = useState([])

  const handleSubInput = (e) => {
    const value = e.target.value
    setSubtractionInput([...subtractionInput, value])
    // RIGHT NOW YOU HAVE AN INPUT THAT GIVES YOU STATE THAT IS AN ARRAY WITH DIFFERENT TYPES..
    // MAKE AN OBJECT, RIGHT TOOL FOR THE JOB
  }

  const inputSubmit = () => {
    const sqFtOfReduced = subtractionInput.reduce((acc, dimension) => acc * dimension)
    setSubtractionList([...subtractionList, sqFtOfReduced])
    subtractFromTotal(sqFtOfReduced)
    setIsSubtracted(false)
  }

  return (
      <div onChange={handleSubInput} >
        <div className="DWO-selection-container">
          <input type="checkbox" checkbox="door" value="door"/>
          <label htmlFor="door">Door</label>
        <input type="checkbox" checkbox="window" value="window" />
          <label htmlFor="window">Window</label>
        <input type="checkbox" checkbox="other" value="other"/>
          <label htmlFor="other">Other</label>
        </div>
        <input 
          type="number"
          className="subtraction-input"
          name="height-subtraction" 
          placeholder="height" 
          autoFocus={true}
        />
        <input 
          type="number"
          className="subtraction-input"
          name="width-subtraction" 
          placeholder="width" 
        />
        <input type="button" value="+ subtraction" onClick={inputSubmit}/>
      </div>
  )
}

export default SubtractionInput
