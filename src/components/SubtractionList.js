import React from 'react'


const SubtractionList = ({subtractionList}) => {
  
  return (
    <div className="subtraction-list">
      {subtractionList.length
        ?
        
        subtractionList.map((subtractionAmount, index) =>
          <div className="WDO-range">
            <div key={index}>-{subtractionAmount} Sq.Ft.</div>
            <div className="delete-subtraction">-</div>
          </div>
        )
        :
        ''
      }
    </div>
  )
}

export default SubtractionList
