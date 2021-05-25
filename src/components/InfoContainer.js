import React from "react";

const InfoContainer = ({
  totalFootage,
  gallons,
  handlePaintInput,
  handleLHWInputs,
  calculateTotal,
  findNumOfGallons,
}) => {
  return (
    <div className="info-container">
      <div className="total info">TOTAL: {totalFootage} sq.ft.</div>
      <div className="gallons-container">
        <div className="gallons-info">
          <div className="info">{gallons / 2} gal primer</div>
          <div className="info">{gallons} gal paint</div>
        </div>
        <input
          type="button"
          value="Find Gallons"
          className="button gallons-submit"
          onClick={findNumOfGallons}
        />
      </div>
      <div className="paint-container">
        <div>$</div>
        <input
          type="number"
          className="paint-cost"
          name="costPerGallon"
          placeholder="cost of paint"
          onChange={handlePaintInput}
        />
        <div className="paint-cost-after">per gallon [average]</div>
      </div>
      <div className="rate-container">
        <div>$</div>
        <input
          type="number"
          className="input"
          placeholder="rate per square foot"
          name="rate"
          onChange={handleLHWInputs}
        />
        <input
          type="button"
          className="add-cost button"
          value="ADD RATE + COST"
          onClick={calculateTotal}
        />
      </div>
      <div className="small-print">[ 400 square feet per gallon ]</div>
    </div>
  );
};

export default InfoContainer;
