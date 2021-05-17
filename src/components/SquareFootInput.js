import React, {useState} from 'react'

const SquareFootInput = ({ handleLHWInputs, findSquareFeet }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [openTwo, setOpenTwo] = useState(false)

  return (
    <div className="inputs">
      <h3>How would you like to input?</h3>
      {isOpen
        ?
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
        <button onClick={() => setIsOpen(false)} className={`button`} >CLOSE</button>
        </div>
        :
      <button onClick={() => setIsOpen(true)} className={`button`}>(WIDTH + LENGTH) * HEIGHT</button>
      }
      {openTwo
      ?
        <div>
          <div className="input-pairing">
            <input
              type="number"
              className="input"
              placeholder="Total"
              name="total"
              onChange={handleLHWInputs}
            />
            <div className="feet">ft.</div>
            <button className='button' onClick={() => setOpenTwo(false)}>CLOSE</button>
          </div>
        </div>
      :
        <button className='button' onClick={() => setOpenTwo(true)}>TOTAL SQ. FOOTAGE</button>
      }
      <input
        className={`sq-foot-button button`}
        type="button"
        value="APPLY SQ. FOOTAGE"
        onClick={findSquareFeet}
        />
    </div>
  )
}

export default SquareFootInput
