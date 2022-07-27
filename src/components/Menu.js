import React from "react";
import ColorPicker from "./ColorPicker";

const Menu = ({ changeTheme, open, color, setColor, showMenu }) => {
  return (
    <div className={`menu ${open}`}>
      <div className={`menu-inside ${open}`} onClick={() => showMenu()}>
        <div></div>
        <div></div>
        <div></div>
        <div className="menu-burger"></div>
      </div>
      <div className="theme-title">Press the color to change the theme.</div>
      <div className="theme-container">
        <div
          className="theme first"
          value="#5f9ea0"
          onClick={(e) => changeTheme(e.target.innerText)}
        ></div>
        <div
          className="theme second"
          value="#dc143c"
          onClick={(e) => changeTheme(e.target.innerText)}
        ></div>
        <div
          className="theme third"
          value="#2f4f4f"
          onClick={(e) => changeTheme(e.target.innerText)}
        ></div>
      </div>
      <div className="theme-title">
        Choose your own by pressing the input below
      </div>
      <ColorPicker
        color={color}
        setColor={setColor}
        changeTheme={changeTheme}
      />
    </div>
  );
};

export default Menu;
