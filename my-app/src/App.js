import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
// import LightRoom from './component/light-room/lightRoom'
import Home from './component/Home/home';
import Snow from './component/snowflake/snow';
import SnowTwo from './component/snowflake/snow';

 const App = () => {

   return (
     <div className='app'>
      <ul>
        <li>
          <link to="/">Home</link>
        </li>
        <li>
          <link to="/snow01">Snow01</link>
        </li>
        <li>
          <link to="/snow02">Snow02</link>
        </li>
      </ul>
      <Route exact path="/" component={ Home }></Route>
      <Route path="/snow01" component={ Snow }></Route>
      <Route path="/snow02" component={ SnowTwo }></Route>
     </div>
   )
 }

export default App;
