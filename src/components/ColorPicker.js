import React, {useState} from 'react'

const ColorPicker = ({ changeTheme }) => {
  const [something, setSomething] = useState('#5f9ea0')
  
  const inputChange = (color) => {
    setSomething(color)
    changeTheme(color)
  }
  
  return (
    <input
      className="color-picker"
      type="color"
      value={something}
      onChange={e => inputChange(e.target.value)}
    />
  )
}

export default ColorPicker
