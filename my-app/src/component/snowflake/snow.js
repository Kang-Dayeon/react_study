import React from 'react';
import useColorChange from '../../hooks/useColorChange'
import styled, { keyframes } from 'styled-components';
import '../../App.css';
import  './snow.css';

const Snow = () => {
  const snowNum = Array.from(Array(100), (index) => index + 1);
  const screenX = window.innerWidth;
  const [bgColor,onChange] = useColorChange('#fff');
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
      <div className="button-wrap">
        <button onClick={onChange} value="#fff">white</button>
        <button onClick={onChange} value="#0037FF">blue</button>
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