import React from 'react'

const UserInfo = (info) => {
  const userInfo = info.user[0]
  return (
    <>
      <h1>안녕하세요!{userInfo.name}님</h1>
      <p>회원 정보</p>
      <ul>
        <li>Phone : {userInfo.phoneNumber}</li>
        {(userInfo.isAdmin) ? <li>권한 : 관리자</li> : <li>권한 : 일반회원</li>}
      </ul>
    </>
  )
}

export default UserInfo