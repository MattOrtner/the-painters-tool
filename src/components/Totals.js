import React from "react";

const Totals = ({ rate, paintCost, totalCost, calcFinal }) => {
  return (
    <>
      <div className="totals">
        <div>cost of work </div>
        <div>$ {rate} </div>
        <div>estimate cost of paint </div>
        <div>$ {paintCost}</div>
        <div>total estimate </div>
        <div>$ {totalCost}</div>
      </div>
      <button className="button" onClick={calcFinal}>
        finalize estimate
      </button>
    </>
  );
};

export default Totals;
