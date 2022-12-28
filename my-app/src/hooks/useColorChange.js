import {useState, useCallback} from 'react'

function useColorChange() {
  const [bgColor,setBgColor] = useState('#fff');
  const colorWhite = () => {
      setBgColor('#fff')
    }
  const colorRed = () => {
      setBgColor('#de1b1f')
    }
  return [bgColor,colorWhite,colorRed]
}

export default useColorChange