import React from 'react'
import './login.css'
import useInput from '../../hooks/useInput';
import {useAuth} from '../../hooks/useAuth'

const LoginPage = () => {

  const [, action] = useAuth()

  const [text, setText] = useInput({
    id : "",
    pw: ""
  })

    return (
        <div className="login-page">
          <div className="login-page__wrap">
            <h2>Login</h2>
            <form className="login-form">
              <input name="id" type="text" value={text.id} onChange={setText} placeholder="아이디를 입력해주세요."></input>
              <input name="pw" type="password" value={text.pw} onChange={setText} placeholder="비밀번호를 입력해주세요."></input>
              <button type="button" onClick={() =>
                (text.id === "") ? alert("아이디를 입력해주세요")
                : (text.pw === "") ? alert("비밀번호를 입력해주세요")
                : action(text.id,text.pw)
              }>LOGIN</button>
            </form>
          </div>
        </div>
    )
}

export default LoginPage
