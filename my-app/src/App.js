import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LoginPage from './component/login/login'
import UserInfo from './component/userInfo/userInfo'

 const App = () => {
   const [user, setUser] = useState([])
   const [isLogin, setIsLogin] = useState(false)
   const navigate = useNavigate();
   const login = () => {
       if(isLogin === false) {
         navigate("/")
       } else {
         navigate("/userinfo")
       }
   }
   useEffect(() => {
     login()
     console.log(isLogin)
     // return () => {
     //   console.log(isLogin)
     // }
   }, [user])

   return (
     <div className='app'>
       <Routes>
         <Route path= "/" element={
           <LoginPage
             user = {user}
             setUser = {setUser}
             setIsLogin = { setIsLogin }
           />
         }></Route>
         <Route path="/userinfo" element={
           <UserInfo
            user = {user}
           />
         }></Route>
       </Routes>

     </div>
   )
 }

export default App;
