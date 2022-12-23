import './App.css';
// import { useState,useEffect } from 'react';
import Light from './component/light'

 const LightRoom = () => {
   return (
     <>
       <div className='light-room-wrap'>
         <div className='light-room'>
           <Light />
           <Light />
           <Light />
           <Light />
         </div>
       </div>
     </>
   )
 }


export default LightRoom;
