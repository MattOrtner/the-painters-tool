import React, { useState } from 'react'

const SubtractionInput = ({ subtractionList, setSubtractionList, setIsSubtracted}) => {
  const [subtractionInput, setSubtractionInput] = useState([])

  const handleSubInput = (e) => {
    const value = e.target.value
    setSubtractionInput([...subtractionInput, value])
  }

  const inputSubmit = () => {
    const sqFtOfReduced = subtractionInput.reduce((acc, dimension) => acc * dimension)
    setSubtractionList([...subtractionList, sqFtOfReduced])
    setIsSubtracted(false)
  }

  return (
    <div onChange={handleSubInput} >
      <input 
        type="number"
        className="subtraction-input"
        name="height-subtraction" 
        placeholder="height" 
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
