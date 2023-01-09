import {createContext, useContext, useState} from 'react';
import { userData } from "../data/userData";

const AuthContext = createContext(null)
const ControlContext = createContext(null)

export function AuthProvider({children}) {
    const [user, setUser] = useState([])
    const [isLogin, setIsLogin] = useState(false)

    const onLogin = () => {
        if(user.length > 0) {
            setIsLogin(true)
        }
    }
    const logout = () => {
        setUser([])
        setIsLogin(false)
    }
    const action = (id, pw) => {
        setUser(userData.filter(list => list.loginId === id && list.password === pw))
    }
    const value = [user, action]
    const loginValue = [isLogin, onLogin, logout]
    return (
      <ControlContext.Provider value={loginValue}>
          <AuthContext.Provider value={value}>
              {children}
          </AuthContext.Provider>
      </ControlContext.Provider>
    )
}

export function useAuth(){
    const value = useContext(AuthContext)
    if(value === undefined){
        throw new Error('error')
    }
    return value
}

export function useLogin() {
    const value = useContext(ControlContext)
    if(value === undefined){
        throw new Error('error')
    }
    return value
}