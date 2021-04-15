import React from 'react'

const ColorPicker = ({changeTheme}) => {
  return (
    <input
      className="color-picker"
      type="color"
      value='#5f9ea0'
      onChange={e => changeTheme(e.target.value)}
    />
  )
}

export default ColorPicker
