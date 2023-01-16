import './App.css';
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routers from './router/router'

 const App = () => {
   return (
      <div className='app'>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </div>
   )
 }

export default App;
