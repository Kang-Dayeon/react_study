import React from 'react'

const UserInfo = () => {
  const [user] = useAuth()
  return (
    <>
      <h1>안녕하세요!{user.name}님</h1>
      <p>회원 정보</p>
      <ul>
        <li>Phone : {user.phoneNumber}</li>
        {(user.isAdmin) ? <li>권한 : 관리자</li> : <li>권한 : 일반회원</li>}
      </ul>
    </>
  )
}

export default UserInfo