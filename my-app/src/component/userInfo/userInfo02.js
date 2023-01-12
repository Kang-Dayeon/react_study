import React from 'react'
import {useAuth} from '../../context/AuthContext'
import './userInfo.css'

const UserInfoTwo = () => {
  const [[user], action, onLogin, logout] = useAuth()

  return (
    <div className="user-info__wrap">
      <h1>Page02</h1>
      <h1>안녕하세요, {user[0].name}님!</h1>
      <div className="user-info__box">
        <p>[ 회원 정보 ]</p>
        <ul>
          <li>- Name : {user[0].name}</li>
          <li>- ID : {user[0].loginId}</li>
          <li>- Password : {user[0].password}</li>
          <li>- Phone : {user[0].phoneNumber}</li>
          {(user[0].isAdmin) ? <li>- 권한 : 관리자</li> : <li>- 권한 : 일반회원</li>}
          <li>- AccessToken : {user[0].accessToken}</li>
        </ul>
        <button type="button" onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default UserInfoTwo