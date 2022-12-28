import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import useColorChange from '../../hooks/useColorChange'
import '../../App.css';
import  './snow.css';

const Snow = () => {
  const [setColor, changeColor] = useColorChange()
  const snowNum = Array.from(Array(200), (index) => index + 1);
  const screenX = window.innerWidth;
  // const [bgColor,setBgColor] = useState('#fff');
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
    background-color: ${setColor('#fff')};
    border-radius: 100%;
    animation: ${dropSnow} 10s ease-in infinite;
  `
  // const colorWhite = () => {
  //    setBgColor('#fff')
  // }
  // const colorRed = () => {
  //   setBgColor('#de1b1f')
  // }

  return (
    <>
      <button onClick={changeColor}>white</button>
      <button onClick={useColorChange}>red</button>
      {snowNum.map((item) => (
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