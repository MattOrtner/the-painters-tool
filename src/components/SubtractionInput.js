import React, { useState } from "react";

const SubtractionInput = ({
  subtractFromTotal,
  subtractionList,
  setSubtractionList,
  setIsSubtracted,
}) => {
  const [subtractionInput, setSubtractionInput] = useState({});

  const onInputChange = (e) => {
    const name = e.target.name;
    console.log("name", name);
    const value = e.target.value;
    console.log("value", value);
    setSubtractionInput({ ...subtractionInput, [name]: value });
  };

  const onInputSubmit = (e) => {
    e.preventDefault();
    if (
      subtractionInput.height === undefined ||
      subtractionInput.width === undefined
    )
      return alert("Required fields missing");

    // const height = parseInt(subtractionInput.height);
    // const width = parseInt(subtractionInput.width);
    setSubtractionList((subtractionList) => [
      {
        name: subtractionInput.name,
        width: subtractionInput.width,
        height: subtractionInput.height,
      },
      ...subtractionList,
    ]);
    // subtractFromTotal(height * width);
    setSubtractionInput({ height: "", width: "" });
  };

  return (
    <div className="subtraction-input-container" onChange={onInputChange}>
      <div className="subtraction-input-top">
        <div className="subtraction-choice">
          <div>
            <input
              type="radio"
              className="radio"
              radio="door"
              value="door"
              name="name"
              id="door"
            />
            <label htmlFor="door">Door</label>
          </div>
          <div>
            <input
              type="radio"
              className="radio"
              radio="window"
              value="window"
              name="name"
            />
            <label htmlFor="door">Window</label>
          </div>
          <div>
            <input
              type="radio"
              className="radio"
              radio="other"
              value="other"
              name="name"
            />
            <label htmlFor="door">Other</label>
          </div>
        </div>
        <div className="close-button-container">
          <div
            className="close-subtraction-button button"
            onClick={() => setIsSubtracted((isSubtracted) => !isSubtracted)}
          >
            X
          </div>
        </div>
      </div>
      <div className="subtraction-input-bottom">
        <input
          type="number"
          className="subtraction-input"
          name="height"
          placeholder="height"
          autoFocus={true}
          required={true}
          onChange={onInputChange}
        />
        <input
          type="number"
          className="subtraction-input"
          name="width"
          placeholder="width"
          required={true}
          onChange={onInputChange}
        />
        <input
          type="button"
          className="submit-subtraction button"
          value="add subtraction"
          onClick={onInputSubmit}
        />
      </div>
    </div>
  );
};

export default SubtractionInput;
