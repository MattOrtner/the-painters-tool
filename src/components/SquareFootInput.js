import React from 'react'

const SquareFootInput = ({calculate, handleLHWInputs}) => {
  return (
    <div className="inputs">
      <input className="input" type="number" placeholder="length" name="length" onChange={handleLHWInputs} />
      <div className="input">ft.</div>
      <input type="number" className="input" placeholder="width" name="width" onChange={handleLHWInputs} />
      <div className="input">ft.</div>
      <input type="number" className="input" placeholder="height" name="height" onChange={handleLHWInputs} />
      <div className="input">ft.</div>
      <input className="button" type="button" value="CALC SQ. FOOTAGE" onClick={calculate} />
    </div>
  )
}

export default SquareFootInput
