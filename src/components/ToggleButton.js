import React, {useState} from 'react'

const ToggleButton = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      {isOpen
        ?
        props
        :
        <button onClick={open}>open</button>
      }
    </div>
  )
}

export default ToggleButton
