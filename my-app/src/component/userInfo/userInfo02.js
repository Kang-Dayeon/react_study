import React from 'react'
import {useAuth} from '../../hooks/useAuth'
import './userInfo.css'

const UserInfoTwo = () => {
  const [{user},,logout] = useAuth()
  const userInfo = user[0]

  return (
    <div className="user-info__wrap">
      <h1>Page02</h1>
      <h1>안녕하세요, {user.name}님!</h1>
      <div className="user-info__box">
        <p>[ 회원 정보 ]</p>
        <ul>
          <li>- Name : {userInfo.name}</li>
          <li>- ID : {userInfo.loginId}</li>
          <li>- Password : {userInfo.password}</li>
          <li>- Phone : {userInfo.phoneNumber}</li>
          {(userInfo.isAdmin) ? <li>- 권한 : 관리자</li> : <li>- 권한 : 일반회원</li>}
          <li>- AccessToken : {userInfo.accessToken}</li>
        </ul>
        <button type="button" onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default UserInfoTwo