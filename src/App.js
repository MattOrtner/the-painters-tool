import './App.css';
import { useState, useEffect } from 'react'
import SubtractionInput from './components/SubtractionInput'
import SubtractionList from './components/SubtractionList'
import Totals from './components/Totals'


function App() {
  const [hwInputs, setHwInputs] = useState({})
  const [totalFootage, setTotalFootage] = useState(0)
  const [subtractionList, setSubtractionList] = useState([])
  const [isSubtracted, setIsSubtracted] = useState(false)

  const [rate, setRate] = useState(0)
  const [paintCost, setPaintCost] = useState(0)
  const [gallons, setGallons] = useState(0)
  const [totalCost, setTotalCost] = useState(0)

  useEffect(() => {
    findTotalCost()
  })

  const subtractFromTotal = (subtractionAmount) => {
    const newSquareFootage = totalFootage - subtractionAmount

    setTotalFootage(newSquareFootage)
  }

  const handleLHWInputs = (e) => {
    const name = e.target.name
    const value = e.target.value
    setHwInputs({...hwInputs, [name]: value})
  }

  const findSquareFeet = () => {
    const widthHeight = hwInputs.width * hwInputs.height
    const lengthHeight = hwInputs.length * hwInputs.height
      setTotalFootage(parseInt(widthHeight + lengthHeight) * 2)
  }

  const findRate = () => {
    const { rate } = hwInputs
    const newRate = (parseInt(rate) * parseInt(totalFootage))
    setRate(newRate)
  }

  const findNumOfGallons = () => {
    const { height, width, length } = hwInputs
    let totalArea = ((parseInt(width) + parseInt(length)) * 2) * parseInt(height) 
    let calcGallons = 0
    while (totalArea > 0) {
      totalArea -= 400
      calcGallons += 1
    }
    setGallons(calcGallons * 2)
  }

  const findGallonsCost = () => {
    const totalPaint = (gallons * 25)
    const totalPrimer = ((gallons / 2) * 25) 
    setPaintCost(totalPaint + totalPrimer)
  }

  const findTotalCost = () => {
    setTotalCost(rate + paintCost)
  }

  const calculate = () => {
    findSquareFeet()
    findNumOfGallons()
  }

  const calculateTotal = () => {
    findGallonsCost()
    findRate()
  }

  return (
    <div className="App">
      <div className="container left">
        <h1>Enter Dimensions of Room</h1>
        <div className="inputs">
          <input className="input" type="number" placeholder="length" name="length" onChange={handleLHWInputs} />
          <div className="input">ft.</div>
          <input type="number" className="input" placeholder="width" name="width" onChange={handleLHWInputs} />
          <div className="input">ft.</div>
          <input type="number" className="input" placeholder="height" name="height" onChange={handleLHWInputs}  />
          <div className="input">ft.</div>
          <input className="button" type="button" value="CALC SQ. FOOTAGE" onClick={calculate}/>
        </div>
        <div className="add-subtraction">
          {isSubtracted ? 
            <>
              <SubtractionInput subtractionList={subtractionList} setIsSubtracted={setIsSubtracted} setSubtractionList={setSubtractionList} />
            </>
            :
            <button className="toggle button" onClick={() => setIsSubtracted(true)}>+ ADD SUBTRACTIONS FOR DOORS AND WINDOWS</button>
          }
        </div>
        {subtractionList.length ? 
          <SubtractionList subtractFromTotal={subtractFromTotal} subtractionList={subtractionList} setSubtractionList={setSubtractionList} /> 
        :
          ''}
      </div> 
      <div className="container right">
        <div className="info-container">
          <div className="total info">TOTAL: {totalFootage} sq.ft.</div>
          <div className="paint-container">
            <div>
              <div className="info">{gallons / 2} gal primer</div>
              <div className="info">{gallons} gal paint</div>
            </div>
            <div>X</div>
            <div>$25 per gallon [average]</div>
          </div>
          <div className="rate-container">
            <div>$</div>
            <input type="number" className="input" placeholder="rate per square foot" name="rate" onChange={handleLHWInputs} />
            <input type="button" className="button" value="ADD RATE + COST" onClick={calculateTotal} />
          </div>
          <div className="small-print">[ 400 square feet per gallon ]</div>
        </div>
        <Totals rate={rate} paintCost={paintCost} totalCost={totalCost}/>
      </div>
    </div>
  );
}

export default App;