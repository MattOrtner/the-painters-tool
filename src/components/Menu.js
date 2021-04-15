import React from 'react'
import ColorPicker from './ColorPicker'


const Menu = ({changeTheme, open, color, setColor}) => {
  return (
    <div className={`menu ${open}`}>
      <div className="theme-title">Choose a different color</div>
      <div className="theme-container">
        <div className="theme first" value="#5f9ea0" onClick={e => changeTheme(e.target.innerText)}>#5f9ea0</div>
        <div className="theme second" value="#dc143c" onClick={e => changeTheme(e.target.innerText)}>#dc143c</div>
        <div className="theme third" value="#2f4f4f" onClick={e => changeTheme(e.target.innerText)}>#2f4f4f</div>
      </div>
        <ColorPicker color={color} setColor={setColor} changeTheme={changeTheme} />
    </div>
  )
}

export default Menu
