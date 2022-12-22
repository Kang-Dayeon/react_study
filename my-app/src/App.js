import './App.css';
// import { useState,useEffect } from 'react';
import LightOne from './component/light01'
import LightTwo from './component/light02'

 const LightRoom = () => {
   return (
     <>
       <div className='light-room-wrap'>
         <div className='light-room'>
           <LightOne />
           <LightTwo />
         </div>
       </div>
     </>
   )
 }


export default LightRoom;
