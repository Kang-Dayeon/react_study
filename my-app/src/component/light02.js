import '../App.css';
import { useState,useEffect } from 'react';

const LightTwo = () => {
  const [changeData, setChangeData] = useState(false)
  const changeBg = (e) => {
    setChangeData((e) => !e)
  };
  return (
    <>
      <div className='light-box'>
        <div
          className={`light-parents ${(changeData === true)? 'bg-red' : ''}`}
          onClick={changeBg}
        ></div>
        <LightChildTwo
          state = {changeData}
          changeColor = {changeBg}
        />
      </div>
    </>
  );
}

const LightChildTwo = (props) => {
  const [childState,setChildState] = useState(props.state)
  const [lightChild, setLightChild] = useState([
    {id: 0, bg : 'bg-yellow'},
    {id: 1, bg : 'bg-blue'},
    {id: 2, bg : 'bg-green'},
  ])
  useEffect(()=>{
    setChildState(props.state)
  },[props])
  return (
    <>
      <ul className='light-child-list'>
        {lightChild.map((item) => (
          <li
            className={`light-child ${(childState === true)? item.bg : ''}`}
            onClick={props.changeColor}
          ></li>
        ))}
      </ul>
    </>
  )
}
export default LightTwo;