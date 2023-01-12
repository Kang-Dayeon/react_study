
import {
  Link,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom'
import LoginPage from '../component/login/login'
import UserInfo from '../component/userInfo/userInfo'
import UserInfoTwo from '../component/userInfo/userInfo02'
import Home from '../component/Home/home'
import {useAuth} from '../hooks/useAuth'
import React, {useEffect} from 'react'
import Count from '../component/count-list/count'
import LightRoom from '../component/light-room/lightRoom'
import Snow from '../component/snowflake/snow'

const Routers = () => {
  const [value] = useAuth()
  const navigate = useNavigate();
  const login = () => {
    if(value.isLogin === true) {
      navigate("/userinfo")
    } else {
      navigate("/")
    }
  }
  useEffect(() => {
    login()
    console.log(value.isLogin)
  }, [value.isLogin])
  return (
      <>
          <ul className="page-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/light-room">Light Room</Link></li>
            <li><Link to="/snow">Snow</Link></li>
            {value.isLogin ? (
              <>
              <li><Link to="/userinfo">page1</Link></li>
              <li><Link to="/userinfo02">page2</Link></li>
              </>
            ) : (
              <li><Link to="/login">Login</Link></li>
            )}
          </ul>

          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/counter" element={<Count/>}></Route>
            <Route path="/light-room" element={<LightRoom/>}></Route>
            <Route path="/snow" element={<Snow/>}></Route>
            {!value.isLogin ? (
              <Route path="/login" element={<LoginPage/>}></Route>
            ) : (
              <>
                <Route path="/userinfo" element={<UserInfo/>}></Route>
                <Route path="/userinfo02" element={<UserInfoTwo/>}></Route>
              </>
            )}
          </Routes>
      </>
  )
}

export default Routers;
