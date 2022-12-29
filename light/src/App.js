import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(false);
  const clickElem = () => {
    setData(true)
  }
  return (
    <>
      <div className={`light-box ${(data === true)? 'bg-red' : ''}`} onClick={clickElem}></div>
      <LightChild data={data}/>
    </>
  );
}
const LightChild = (data) => {
  return (
    <ul>
      <li className={`light-child ${(data === true)? 'bg-red' : ''}`}></li>
      <li className={`light-child ${(data === true)? 'bg-red' : ''}`}></li>
    </ul>
  )
}

export default App;
