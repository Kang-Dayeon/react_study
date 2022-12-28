import {useState, useCallback} from 'react'

function useColorChange(initialForm) {
  const [color, setColor] = useState(initialForm)
  const changeColor = useCallback(
    () => {
      setColor(color)
    }
  );
  return [setColor,changeColor]
}

export default useColorChange