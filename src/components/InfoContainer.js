import React from 'react'

const InfoContainer = ({themeColor, totalFootage, gallons, handlePaintInput, handleLHWInputs, calculateTotal}) => {
  return (
    <div className="info-container">
      <div className="total info">TOTAL: {totalFootage} sq.ft.</div>
      <div className="info">{gallons / 2} gal primer</div>
      <div className="info">{gallons} gal paint</div>
      <div className="paint-container">
        <div>$</div>
        <input type="number" className="paint-cost" name="costPerGallon" placeholder="cost of paint" onChange={handlePaintInput} />
        <div className="paint-cost-after">per gallon [average]</div>
      </div>
      <div className="rate-container">
        <div>$</div>
        <input type="number" className="input" placeholder="rate per square foot" name="rate" onChange={handleLHWInputs} />
        <input type="button" className={`add-cost button ${themeColor}`} value="ADD RATE + COST" onClick={calculateTotal} />
      </div>
      <div className="small-print">[ 400 square feet per gallon ]</div>
    </div>
  )
}

export default InfoContainer
