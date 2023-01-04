import React from "react";

const LoginPage = () => {
    return (
        <>
            <h2>Login</h2>
            <form className="login-form">
                <label for="id">ID</label>
                <input id="id" type="text" placeholder="아이디를 입력해주세요."></input>
                <label for="pw">Password</label>
                <input id="pw" type="text" placeholder="비밀번호를 입력해주세요."></input>
            </form>
        </>
    )
}

export default LoginPage
