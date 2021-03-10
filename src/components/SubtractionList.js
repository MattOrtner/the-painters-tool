import React from 'react'


const SubtractionList = ({ subtractionList, setSubtractionList, subtractFromTotal }) => {

  const subFromTotal = () => {
    if(subtractionList.length === 0) return alert("Must fill-in subtractions to apply subtractions")
    const individualSubtractions = subtractionList.map((subtractionCase) => subtractionCase.height * subtractionCase.width)
    const subtractionSqFt = individualSubtractions.reduce((acc, sqFt) => acc + sqFt)
    subtractFromTotal(subtractionSqFt)
  }

  const deleteSubtraction = (index) => {
    const newList = subtractionList.filter((_, subtractionIndex) => subtractionIndex !== index)
    setSubtractionList(newList)
  }
  return (
    <div className="subtraction-list">
      <div className="subtractions-container">
        {subtractionList.length
          ?
          
          subtractionList.map((subtractionCase, index) =>
            <div key={`${index}c`} className="DOW-single-subtraction">
              <div key={index}>{subtractionCase.name}</div>
              <div key={`${index}a`}>-{subtractionCase.height * subtractionCase.width} Sq.Ft.</div>
              <div className="delete-subtraction button" key={`${index}b`} onClick={() => deleteSubtraction(index)}>delete</div>
            </div>
          )
        :
          ''
        }
      </div>
      <button className="button " onClick={subFromTotal}>APPLY SUBTRACTIONS</button>
    </div>
  )
}

export default SubtractionList
