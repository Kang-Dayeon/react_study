import {createContext, useContext, useState} from 'react';
import { userData } from "../data/userData";

const AuthContext = createContext(null)

export function AuthProvider({children}) {
    const [user, setUser] = useState([])
    const [isLogin, setIsLogin] = useState(false)

    const value = {
        user : user,
        setUser : setUser,
        isLogin : isLogin,
        setIsLogin : setIsLogin,
    }

    return (
      <AuthContext.Provider value={value}>
          {children}
      </AuthContext.Provider>
    )
}

export function useAuth(){
    const value = useContext(AuthContext)
    const action = (id, pw) => {
        value.setUser(userData.filter(list => list.loginId === id && list.password === pw))
    }
    const onLogin = () => {
        if(value.user.length > 0) {
            value.setIsLogin(true)
        }
    }
    const logout = () => {
        value.setUser([])
        value.setIsLogin(false)
    }

    if(value === undefined){
        throw new Error('error')
    }
    return [value, action, onLogin, logout]
}
