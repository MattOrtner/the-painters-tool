import "./App.css";
import { useState } from "react";
import SubtractionInput from "./components/SubtractionInput";
import SubtractionList from "./components/SubtractionList";
import Totals from "./components/Totals";
import SquareFootInput from "./components/SquareFootInput";
import InfoContainer from "./components/InfoContainer";
import Menu from "./components/Menu";

function App() {
  const [hwInputs, setHwInputs] = useState({});
  const [startFootage, setStartFootage] = useState(0);
  const [subtractedFootage, setSubtractedFootage] = useState(0);
  const [subtractionList, setSubtractionList] = useState([]);
  const [isSubtracted, setIsSubtracted] = useState(false);
  const [rate, setRate] = useState(0);
  const [costPerGallon, setCostPerGallon] = useState("");
  const [paintCost, setPaintCost] = useState(0);
  const [gallons, setGallons] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [open, setOpen] = useState("");

  const handlePaintInput = (e) => {
    e.preventDefault();
    const newCost = e.target.value;
    setCostPerGallon(newCost);
  };

  const subtractFromTotal = (subtractionAmount) => {
    setSubtractedFootage(startFootage - subtractionAmount);
  };

  const handleLHWInputs = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setHwInputs({ ...hwInputs, [name]: value });
  };

  const applySquareFeet = () => {
    const total = hwInputs.total;
    if (total) {
      setStartFootage(parseInt(total));
      setSubtractedFootage(parseInt(total));
    } else {
      const widthHeight = parseInt(hwInputs.width) * parseInt(hwInputs.height);
      const lengthHeight =
        parseInt(hwInputs.length) * parseInt(hwInputs.height);
      const squFootage = parseInt(widthHeight + lengthHeight) * 2;
      setStartFootage(squFootage);
      setSubtractedFootage(squFootage);
    }
  };

  const findNumOfGallons = () => {
    let totalArea = subtractedFootage;
    let calcGallons = 0;
    while (totalArea > 0) {
      totalArea -= 400;
      calcGallons += 1;
    }
    setGallons(calcGallons * 2);
  };

  const calculateRateAndGallons = () => {
    findGallonsCost();
    findRate();
  };

  const findGallonsCost = () => {
    const totalPaint = gallons * costPerGallon;
    const totalPrimer = (gallons / 2) * costPerGallon;
    setPaintCost(totalPaint + totalPrimer);
  };
  const findRate = () => {
    const { rate } = hwInputs;
    const newRate = parseInt(rate) * parseInt(subtractedFootage);
    setRate(newRate);
  };

  const calcFinal = () => {
    setTotalCost(rate + paintCost);
  };

  const showMenu = () => {
    if (isMenuShown === true) {
      setIsMenuShown(false);
      setOpen("");
    } else {
      setOpen("open");
      setIsMenuShown(true);
    }
  };
  const changeTheme = (newColor) => {
    document.documentElement.style.setProperty("--theme-color", newColor);
  };

  return (
    <div className="App">
      <div className={`menu-button ${open}`} onClick={() => showMenu()}>
        <div className="menu-burger"></div>
      </div>

      <h1 className="title">Enter the Dimensions of the Room</h1>
      <Menu
        changeTheme={changeTheme}
        open={open}
        setIsMenuShown={setIsMenuShown}
        showMenu={showMenu}
      />
      <div className="bottom-container">
        <div className="container left">
          <SquareFootInput
            handleLHWInputs={handleLHWInputs}
            applySquareFeet={applySquareFeet}
          />
          {isSubtracted ? (
            <SubtractionInput
              subtractionList={subtractionList}
              setIsSubtracted={setIsSubtracted}
              setSubtractionList={setSubtractionList}
              subtractFromTotal={subtractFromTotal}
            />
          ) : (
            <button
              className={`toggle-subtraction button`}
              onClick={() => setIsSubtracted(true)}
            >
              CREATE SUBTRACTION
            </button>
          )}
          {subtractionList.length ? (
            <SubtractionList
              subtractFromTotal={subtractFromTotal}
              subtractionList={subtractionList}
              setSubtractionList={setSubtractionList}
              subtractedFootage={subtractedFootage}
              setSubtractedFootage={setSubtractedFootage}
            />
          ) : (
            "there are no subtractions"
          )}
        </div>
        <div className="container right">
          <InfoContainer
            subtractedFootage={subtractedFootage}
            gallons={gallons}
            handlePaintInput={handlePaintInput}
            handleLHWInputs={handleLHWInputs}
            calculateRateAndGallons={calculateRateAndGallons}
            findNumOfGallons={findNumOfGallons}
          />
          <Totals
            rate={rate}
            paintCost={paintCost}
            totalCost={totalCost}
            calcFinal={calcFinal}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
