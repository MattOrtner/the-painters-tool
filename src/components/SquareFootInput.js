import React, { useState } from "react";

const SquareFootInput = ({ handleLHWInputs, applySquareFeet }) => {
  const [isLWHInputOpen, setIsLWHInputOpen] = useState(false);
  const [isTotalInputOpen, setIsTotalInputOpen] = useState(false);

  return (
    <div className="inputs">
      <div className="square-ft-inputs">
        {isLWHInputOpen ? (
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
            <button
              onClick={() => setIsLWHInputOpen(false)}
              className={"off button"}
            >
              CLOSE
            </button>
          </div>
        ) : (
          <button onClick={() => setIsLWHInputOpen(true)} className={`button`}>
            (WIDTH + LENGTH) * HEIGHT
          </button>
        )}
        {isTotalInputOpen ? (
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
              <button
                className="off button"
                onClick={() => setIsTotalInputOpen(false)}
              >
                CLOSE
              </button>
            </div>
          </div>
        ) : (
          <button className="button" onClick={() => setIsTotalInputOpen(true)}>
            TOTAL SQ. FOOTAGE
          </button>
        )}
      </div>
      <input
        className={`apply-sq-ft button`}
        type="button"
        value="APPLY SQ. FOOTAGE"
        onClick={applySquareFeet}
      />
    </div>
  );
};

export default SquareFootInput;
