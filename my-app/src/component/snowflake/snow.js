import { useState } from 'react';
import useColorChange from '../../hooks/useColorChange'
import styled, { keyframes } from 'styled-components';
import '../../App.css';
import  './snow.css';

const Snow = () => {
  const snowNum = Array.from(Array(200), (index) => index + 1);
  const screenX = window.innerWidth;
  const [bgColor, colorWhite, colorRed] = useColorChange()
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
    background-color: ${bgColor};
    border-radius: 100%;
    animation: ${dropSnow} 10s ease-in infinite;
  `

  return (
    <>
      <button onClick={colorWhite}>white</button>
      <button onClick={colorRed}>red</button>
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