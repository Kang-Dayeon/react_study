import React from 'react';
// import useColorChange from '../../hooks/useColorChange'
import styled, { keyframes } from 'styled-components';
import '../../App.css';
import  './snow.css';
import {useDispatch, useSelector} from 'react-redux'
import {colorChange} from '../../reducers/changeColor'

const Snow = () => {
  const color = useSelector(state => state.colorAction.color)
  const dispatch = useDispatch()
  const handleColor = (e) => {
    dispatch(colorChange(e.target.value))
  }
  console.log(color.color)
  const snowNum = Array.from(Array(100), (index) => index + 1);
  const screenX = window.innerWidth;
  // const [bgColor,onChange] = useColorChange('#fff');
  const dropSnow = keyframes`
    0% {}
    100% {
        top : 100%;
    }
  `
  const SnowFlake = styled.div`
    position: absolute;
    top: -100px;
    left: 0;
    width: 10px;
    height: 10px;
    background-color: ${color};
    border-radius: 100%;
    animation: ${dropSnow} 10s ease-in infinite both running;
  `

  return (
    <>
      <div className="button-wrap">
        <button onClick={handleColor} value="#fff">white</button>
        <button onClick={handleColor} value="#0037FF">blue</button>
      </div>
      {snowNum.map(() => (
        <SnowFlake
          style={{
            left : Math.random() * screenX + 'px',
            animationDuration : (Math.random() * (18 - 3)) + 3 + 's',
            opacity : Math.random()
          }}
         />
        )
      )}
    </>
  )

}

export default Snow;