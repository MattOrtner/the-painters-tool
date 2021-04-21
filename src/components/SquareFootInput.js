import React from 'react'

const SquareFootInput = ({ handleLHWInputs, themeColor, findSquareFeet }) => {

  return (
    <div className="inputs">
      <div className="top-inputs">
        <div className="input-pairing">
          <input
            className="input"
            type="number"
            placeholder="length"
            name="length"  
            onChange={handleLHWInputs}
          />
          <div className="feet">ft.</div>
        </div>
        <div className="input-pairing">
          <input
            type="number"
            className="input"
            placeholder="width"
            name="width"
            onChange={handleLHWInputs}
          />
          <div className="feet">ft.</div>
        </div>
        <div className="input-pairing">
          <input
            type="number"
            className="input"
            placeholder="height"
            name="height"
            onChange={handleLHWInputs}
          />
          <div className="feet">ft.</div>
        </div>
      </div>
      <div className="or-input-divider">OR</div>
      <div className="input-pairing">
        <input
          type="number"
          className="input"
          placeholder="Total"
          name="total"
          onChange={handleLHWInputs}
        />
        <div className="feet">ft.</div>
      </div>
      <input
        className={`sq-foot-button button ${themeColor}`}
        type="button"
        value="CALCULATE SQ. FOOTAGE"
        onClick={findSquareFeet}
        />
    </div>
  )
}

export default SquareFootInput
