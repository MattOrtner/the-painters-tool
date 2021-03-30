import React from 'react'

const Menu = ({changeTheme}) => {
  return (
    <div className="menu">
      <div className="theme-title">Choose a theme</div>
      <div className="theme-container">
        <div className="theme one" color="one" onClick={(e) => changeTheme(e)}></div>
        <div className="theme two" color="two" onClick={(e) => changeTheme(e)}></div>
        <div className="theme three" color="three" onClick={(e) => changeTheme(e)}></div>
      </div>
    </div>
  )
}

export default Menu
