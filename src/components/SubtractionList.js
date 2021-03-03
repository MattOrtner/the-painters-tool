import React from 'react'


const SubtractionList = ({subtractionList}) => {
  
  return (
    <div className="subtraction-list">
      {subtractionList.length ?
        subtractionList.map((subtractionAmount, index) =>
          <div key={index}>-{subtractionAmount} Sq.Ft.</div>
        )
        :
        ''
      }
    </div>
  )
}

export default SubtractionList
