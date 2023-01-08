import React, { useEffect } from 'react'
import './login.css'
import useInput from '../../hooks/useInput';

const LoginPage = (props) => {

  const [user,action] = useAuth()

  const [text, setText] = useInput({
    id : "",
    pw: ""
  })

  const onLogin = () => {
    if(user.length > 0) {
      props.setIsLogin(true)
    } else if (user === []) {
      alert("정보가 일치하지 않습니다.")
    } else if (text.id === "") {
      alert("아이디를 입력하세요.")
    } else if (text.pw === "") {
      alert("비밀번호를 입력하세요.")
    } else {
      alert("아이디와 비밀번호를 입력하세요.")
    }
  }
  
  useEffect(() => {
    onLogin()
  },[user])
  
    return (
        <div className="login-page">
          <div className="login-page__wrap">
            <h2>Login</h2>
            <form className="login-form">
              <input name="id" type="text" value={text.id} onChange={setText} placeholder="아이디를 입력해주세요."></input>
              <input name="pw" type="password" value={text.pw} onChange={setText} placeholder="비밀번호를 입력해주세요."></input>
              <button type="submit" onClick={action(text.id,text.pw)}>LOGIN</button>
            </form>
          </div>
        </div>
    )
}

export default LoginPage
