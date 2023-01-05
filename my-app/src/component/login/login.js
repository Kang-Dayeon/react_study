import React, {useState} from 'react'
import './login.css'

const LoginPage = () => {
  const userData = [
    {
      name: "정주호",
      loginId: "meju7015",
      password: "123123123",
      phoneNumber: "010-2396-2036",
      isAdmin: true,
      accessToken: "18c1021a9b9d8e9999edf028182e3",
      abilities: [
        {
          action: "dashboard",
          permission: "manage"
        },
        {
          action: "users",
          permission: "read"
        }
      ]
    },
    {
      name: "스틱",
      loginId: "sticker",
      password: "123123123",
      phoneNumber: "010-1243-1234",
      isAdmin: false,
      accessToken: "43c1051a9b9d8e7779123328182e4",
      abilities: [
        {
          action: "dashboard",
          permission: "read"
        },
        {
          action: "users",
          permission: "read"
        }
      ]
    }
  ]
  const [id, setId] = useState(null)
  const [pw, setPw] = useState(null)
  const onLogin = (e) => {
    e.preventDefault()
    const user = userData.filter(list => list.loginId === id && list.password === pw)
    console.log(user)
  }
  const handleId = (e) => {
    setId(e.target.value)
  }
  const handlePw = (e) => {
    setPw(e.target.value)
  }
    return (
        <div className="login-page">
          <div className="login-page__wrap">
            <h2>Login</h2>
            <form className="login-form">
              <input id="id" type="text" value={id} onChange={handleId} placeholder="아이디를 입력해주세요."></input>
              <input id="pw" type="text" value={pw} onChange={handlePw} placeholder="비밀번호를 입력해주세요."></input>
              <button type="submit" onClick={onLogin}>LOGIN</button>
            </form>
          </div>
        </div>
    )
}

export default LoginPage
