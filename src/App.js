import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [hwInputs, setHwInputs] = useState({})
  const [totalFootage, setTotalFootage] = useState(0)

  const [rate, setRate] = useState(0)
  const [paintCost, setPaintCost] = useState(0)
  const [gallons, setGallons] = useState(0)
  const [totalCost, setTotalCost] = useState(0)

  useEffect(() => {
    findTotalCost()
  })

  const handleHWinputs = (e) => {
    const name = e.target.name
    const value = e.target.value
    setHwInputs({...hwInputs, [name]: value})
  }
  const findSquareFeet = () => {
      const total = hwInputs.height * hwInputs.width 
      setTotalFootage(parseInt(total))
  }
  const findRate = () => {
    const { height, width, rate } = hwInputs
    const newRate = parseInt(rate) * (parseInt(height) * parseInt(width))
    setRate(newRate)
  }
  const findGallonsAndCost = () => {
    const { height, width } = hwInputs
    let totalArea = (parseInt(height) * parseInt(width)) 
    let calcGallons = 0
    while (totalArea >= 0) {
      totalArea -= 350
      calcGallons += 1
    }
    setPaintCost(calcGallons * 25)
    setGallons(calcGallons)
  }

  const findTotalCost = () => {
    setTotalCost(rate + paintCost)
  }

  const calculate = () => {
    findSquareFeet()
  }

  const calculateTotal = () => {
    findGallonsAndCost()
    findRate()
  }

  /**
   * Add subtractions - areas like windows and doors
   */
  return (
    <div className="App">
      <div className="inputs">
        <textarea name="" id="" cols="30" rows="2" placeholder="Keep track of all 
          wall lengths here. Then add them together.">  
        </textarea>
        <input type="number" placeholder="height" name="height" onChange={handleHWinputs}  />
        <input type="number" placeholder="length" name="width" onChange={handleHWinputs} />
        <input type="number" placeholder="rate" name="rate" onChange={handleHWinputs} />
        <input type="button" value="CALC SQUARE FOOTAGE" onClick={calculate}/>
        <input type="button" value="ADD RATE + COST" onClick={calculateTotal} />
      </div>
      <div className="info-container">
        <span className="info">{totalFootage} sq.ft.</span>
        <span className="info">{gallons} gallon (1 gallon = 350sq.ft.)</span>
        {/* <span className="info">{time} Hours</span> */}
      </div>
      <div className="totals">
        <div>cost of work </div>
        <div>$ {rate} </div>
        <div>estimate cost of paint </div>
        <div>$ {paintCost}</div>
        <div>total estimate </div>
        <div>$ {totalCost}</div>
      </div>
    </div>
  );
}

export default App;