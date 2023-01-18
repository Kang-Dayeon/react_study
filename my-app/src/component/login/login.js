import React, {useEffect} from 'react'
import './login.css'
import useInput from '../../hooks/useInput';
import {useAuth} from '../../hooks/useAuth'

const LoginPage = () => {

  const [,action,,loginIdPasswordCheck] = useAuth()

  const [text, setText] = useInput({
    loginId : "",
    password: ""
  })
  useEffect(() => {
    loginIdPasswordCheck(text.loginId,text.password)
  })

    return (
        <div className="login-page">
          <div className="login-page__wrap">
            <h2>Login</h2>
            <form className="login-form">
              <input name="loginId" type="text" value={text.loginId} onChange={setText} placeholder="아이디를 입력해주세요."></input>
              <input name="password" type="password" value={text.password} onChange={setText} placeholder="비밀번호를 입력해주세요."></input>
              <button type="button" onClick={() =>
                (text.loginId === "") ? alert("아이디를 입력해주세요")
                : (text.password === "") ? alert("비밀번호를 입력해주세요")
                : action(text.loginId,text.password)
              }>LOGIN</button>
            </form>
          </div>
        </div>
    )
}

export default LoginPage
