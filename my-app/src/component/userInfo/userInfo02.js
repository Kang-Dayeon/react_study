import React from 'react'
import {useAuth} from '../../context/AuthContext'
import './userInfo.css'

const UserInfoTwo = () => {
  const [value, , , logout] = useAuth()
  const user = value.user[0]

  return (
    <div className="user-info__wrap">
      <h1>Page02</h1>
      <h1>안녕하세요, {user.name}님!</h1>
      <div className="user-info__box">
        <p>[ 회원 정보 ]</p>
        <ul>
          <li>- Name : {user.name}</li>
          <li>- ID : {user.loginId}</li>
          <li>- Password : {user.password}</li>
          <li>- Phone : {user.phoneNumber}</li>
          {(user.isAdmin) ? <li>- 권한 : 관리자</li> : <li>- 권한 : 일반회원</li>}
          <li>- AccessToken : {user.accessToken}</li>
        </ul>
        <button type="button" onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default UserInfoTwo