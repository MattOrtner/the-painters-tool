import React from 'react'

const SquareFootInput = ({ calculate, handleLHWInputs, setTotalFootage }) => {

  return (
    <div className="inputs">
      <div className="input-pairing">
        <input className="input" type="number" placeholder="length" name="length" onChange={handleLHWInputs} />
        <div className="feet">ft.</div>
      </div>
      <div className="input-pairing">
        <input type="number" className="input" placeholder="width" name="width" onChange={handleLHWInputs} />
        <div className="feet">ft.</div>
      </div>
      <div className="input-pairing">
        <input type="number" className="input" placeholder="height" name="height" onChange={handleLHWInputs} />
        <div className="feet">ft.</div>
      </div>
      <div className="break-in-inputs">OR</div>
      <div className="input-pairing">
        <input type="number"  className="input-total" placeholder="Total" name="total" onChange={handleLHWInputs}/>
        <div className="feet">ft.</div>
      </div>
      <input className="button" type="button" value="CALC SQ. FOOTAGE" onClick={calculate} />
    </div>
  )
}

export default SquareFootInput
