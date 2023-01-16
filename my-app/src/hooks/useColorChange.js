import {useState} from 'react'

function useColorChange(color) {
  const [bgColor,setBgColor] = useState(color);

  const onChange = (e) => {
    e.preventDefault()
    setBgColor(e.target.value)
  }

  return [bgColor,onChange]
}

export default useColorChange