import React, { useState } from 'react'

const SubtractionInput = ({ themeColor, subtractionList, setSubtractionList, setIsSubtracted}) => {
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
      <div className="subtraction-input-container" onChange={onInputChange} >
        <div className="subtraction-input-top">
          <div className="subtraction-choice">
            <div>
              <input type="radio" className="radio" radio="door" value="door" name="name" id="door" />
              <label for="door">Door</label>
            </div>
            <div>
              <input type="radio" className="radio" radio="window" value="window" name="name"/> Window
            </div>
            <div>
              <input type="radio" className="radio" radio="other" value="other" name="name" /> Other
            </div>
          </div>
          <div className="close-button-container">
            <div className={`close-subtraction-button button ${themeColor}`} onClick={() => setIsSubtracted(false)}> X </div>
          </div>
        </div>
        <div className="subtraction-input-bottom">
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
          <input type="button" className={`button ${themeColor}`} value="+ subtraction" onClick={onInputSubmit}/>
        </div>
      </div>
  )
}

export default SubtractionInput
