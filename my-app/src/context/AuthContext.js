import {createContext, useContext, useState} from 'react';
import { userData } from "../data/userData";

const AuthContext = createContext(null)

export function AuthProvider({children}) {
    const [user, setUser] = useState([])
    const [isLogin, setIsLogin] = useState(false)

    const value = [user, setUser, isLogin, setIsLogin]

    return (
      <AuthContext.Provider value={value}>
          {children}
      </AuthContext.Provider>
    )
}

export function useAuth(){
    const value = useContext(AuthContext)
    console.log(value)
    const action = (id, pw) => {
        value[1](...value[0],userData.filter(list => list.loginId === id && list.password === pw))
    }
    const onLogin = () => {
        if(value[0].length > 0) {
            value[3](true)
        }
    }
    const logout = () => {
        value[1]([])
        value[3](false)
    }

    if(value === undefined){
        throw new Error('error')
    }
    return [value, action, onLogin, logout]
}
