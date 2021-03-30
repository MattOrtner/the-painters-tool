import './App.css';
import { useState, useEffect } from 'react'
import SubtractionInput from './components/SubtractionInput'
import SubtractionList from './components/SubtractionList'
import Totals from './components/Totals'
import SquareFootInput from './components/SquareFootInput'
import InfoContainer from './components/InfoContainer';
import Menu from './components/Menu'


function App() {
  const [hwInputs, setHwInputs] = useState({})
  const [totalFootage, setTotalFootage] = useState(0)
  const [subtractionList, setSubtractionList] = useState([])
  const [isSubtracted, setIsSubtracted] = useState(false)
  const [rate, setRate] = useState(0)
  const [costPerGallon, setCostPerGallon] = useState('')
  const [paintCost, setPaintCost] = useState(0)
  const [gallons, setGallons] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [isMenuShown, setIsMenuShown] = useState(false)
  const [themeColor, setThemeColor] = useState('one')

  useEffect(() => {
    findTotalCost()
  })

  const handlePaintInput = (e) => {
    const newCost = e.target.value
    setCostPerGallon(newCost)
  }

  const subtractFromTotal = (subtractionAmount) => {
    const newSquareFootage = totalFootage - subtractionAmount

    setTotalFootage(newSquareFootage)
  }

  const handleLHWInputs = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(typeof(value));
    setHwInputs({...hwInputs, [name]: value})
  }

  const findSquareFeet = () => {
    const total = hwInputs.total
    if (total) {
      setTotalFootage(parseInt(total))
    } else {
      const widthHeight = hwInputs.width * hwInputs.height
      const lengthHeight = hwInputs.length * hwInputs.height
      setTotalFootage(parseInt(widthHeight + lengthHeight) * 2)
    }
  }

  const findRate = () => {
    const { rate } = hwInputs
    const newRate = (parseInt(rate) * parseInt(totalFootage))
    setRate(newRate)
  }

  const findNumOfGallons = () => {
    const { height, width, length, total} = hwInputs
    const HWLSquareFootage = ((parseInt(width) + parseInt(length)) * 2) * parseInt(height)
    let totalArea = HWLSquareFootage || parseInt(total)
    let calcGallons = 0
    while (totalArea > 0) {
      totalArea -= 400
      calcGallons += 1
    }
    setGallons(calcGallons * 2)
  }

  const findGallonsCost = () => {
    const totalPaint = (gallons * costPerGallon)
    const totalPrimer = ((gallons / 2) * costPerGallon) 
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

  const showMenu = () => {
    if (isMenuShown === true) {
      setIsMenuShown(false)
    } else {
      setIsMenuShown(true)
    }
  }
  const changeTheme = (e) => {
    const newTheme = e.target.attributes.color.nodeValue
    setThemeColor(newTheme)
  }
  
  return (
    <div className="App">
      <div className="menu-button" onClick={() => showMenu()}>
        <div className="menu-burger"></div>
      </div>

      <h1 className="title" >Enter the Dimensions of Room</h1>

      {isMenuShown ?
        <Menu changeTheme={changeTheme} />
        :

        <div className="bottom-container">
          <div className="container left">
            <SquareFootInput
              calculate={calculate}
              themeColor={themeColor}
              handleLHWInputs={handleLHWInputs}
              setTotalFootage={setTotalFootage}
            />
              {isSubtracted ? 
                <>
                <SubtractionInput
                  themeColor={themeColor}
                  subtractionList={subtractionList}
                  setIsSubtracted={setIsSubtracted}
                  setSubtractionList={setSubtractionList}
                />
                </>
                :
              <button
                className={`toggle-subtraction button ${themeColor}`}
                onClick={() => setIsSubtracted(true)}>+ ADD SUBTRACTIONS FOR DOORS AND WINDOWS</button>
              }
            {subtractionList.length ? 
              <SubtractionList
                themeColor={themeColor}
                subtractFromTotal={subtractFromTotal} subtractionList={subtractionList}
                setSubtractionList={setSubtractionList}
              />
            :
              ''}
          </div>

          <div className="container right">
            <InfoContainer
              themeColor={themeColor}
              totalFootage={totalFootage}
              gallons={gallons}
              handlePaintInput={handlePaintInput}
              handleLHWInputs={handleLHWInputs}
              calculateTotal={calculateTotal}
            />
            <Totals rate={rate} paintCost={paintCost} totalCost={totalCost}/>
          </div>
        </div>
      }
    </div>
  );
}

export default App;