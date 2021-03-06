import React from 'react'


const SubtractionList = ({ subtractionList, subtractFromTotal }) => {

  const subFromTotal = () => {
    if(subtractionList.length === 0) return alert("Must fill-in subtractions to apply subtractions")
    const individualSubtractions = subtractionList.map((subtractionCase) => subtractionCase.height * subtractionCase.width)
    const subtractionSqFt = individualSubtractions.reduce((acc, sqFt) => acc + sqFt)
    subtractFromTotal(subtractionSqFt)
  }

  return (
    <div className="subtraction-list">
      {subtractionList.length
        ?
        
        subtractionList.map((subtractionCase, index) =>
          <div className="DOW-single-subtraction">
            <div key={index}>{subtractionCase.name}</div>
            <div key={`${index}a`}>-{subtractionCase.height * subtractionCase.width} Sq.Ft.</div>
            <div className="delete-subtraction">delete</div>
          </div>
        )
        :
        ''
      }
      <button onClick={subFromTotal}>APPLY SUBTRACTIONS</button>
    </div>
  )
}

export default SubtractionList
