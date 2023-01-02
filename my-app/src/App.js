import './App.css';
import React from 'react';
import {Route, Link, Routes} from 'react-router-dom'
import Snow from './component/snowflake/snow';
import SnowTwo from './component/snowflake/snow_02';

 const App = () => {

   return (
     <div className='app'>
      <ul>
        <li>
          <Link to="/snow01">Snow01</Link>
        </li>
        <li>
          <Link to="/snow02">Snow02</Link>
        </li>
      </ul>

       <Routes>
         <Route path="/snow01" element={ <Snow /> }></Route>
         <Route path="/snow02" element={ <SnowTwo /> }></Route>
       </Routes>

     </div>
   )
 }

export default App;
