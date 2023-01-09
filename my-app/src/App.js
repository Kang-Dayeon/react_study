import './App.css';
import React, {useEffect} from 'react'
import {Link, Route, Routes, useNavigate} from 'react-router-dom'
import LoginPage from './component/login/login'
import UserInfo from './component/userInfo/userInfo'
import {useLogin} from './context/AuthContext'
import UserInfoTwo from './component/userInfo/userInfo02'
import Home from './component/Home/home'

 const App = () => {
   const [isLogin] = useLogin()
   const navigate = useNavigate();
   const login = () => {
       if(isLogin === false) {
         navigate("/login")
       } else {
         navigate("/userinfo")
       }
   }

   useEffect(() => {
     login()
     console.log(isLogin)
   }, [isLogin])

   return (
      <div className='app'>
        {isLogin ? (
          <ul className="page-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/userinfo">page1</Link></li>
            <li><Link to="/userinfo02">page2</Link></li>
          </ul>
          ) : (
            <ul className="page-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          )}

        {!isLogin ? (
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/userinfo" element={<UserInfo/>}></Route>
            <Route path="/userinfo02" element={<UserInfoTwo/>}></Route>
          </Routes>
        )}
      </div>
   )
 }

export default App;
