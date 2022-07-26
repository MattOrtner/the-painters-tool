import React from "react";

const SubtractionList = ({
  subtractedFootage,
  // setTotalFootage,
  setSubtractedFootage,
  subtractionList,
  setSubtractionList,
  subtractFromTotal,
}) => {
  const subFromTotal = () => {
    if (subtractionList.length === 0)
      return alert("Must fill-in subtractions to apply subtractions");
    const individualSubtractions = subtractionList.map(
      (subtractionCase) =>
        parseInt(subtractionCase.height) * parseInt(subtractionCase.width)
    );
    const subtractionAmount = individualSubtractions.reduce(
      (acc, sqFt) => acc + sqFt
    );
    subtractFromTotal(subtractionAmount);
  };

  const deleteSubtraction = (index) => {
    const newList = subtractionList.filter(
      (_, subtractionIndex) => subtractionIndex !== index
    );
    const removed = subtractionList.filter(
      (_, subtractionIndex) => subtractionIndex === index
    );
    const { width, height } = removed[0];
    setSubtractedFootage(
      parseInt(subtractedFootage) + parseInt(height) * parseInt(width)
    );
    setSubtractionList(newList);
  };

  return (
    <div className="subtraction-list">
      <div className="subtractions-container">
        {subtractionList &&
          subtractionList.map((subtractionCase, index) => (
            <div key={`${index}c`} className="DOW-single-subtraction">
              <div key={index}>{subtractionCase.name}</div>
              <div key={`${index}a`}>
                {`${subtractionCase.height * subtractionCase.width} Sq.Ft.`}
              </div>
              <div
                className={`delete-subtraction button`}
                key={`${index}b`}
                onClick={() => deleteSubtraction(index)}
              >
                delete
              </div>
            </div>
          ))}
      </div>
      <button className={`submit-subtraction button`} onClick={subFromTotal}>
        APPLY SUBTRACTIONS
      </button>
    </div>
  );
};

export default SubtractionList;
//
