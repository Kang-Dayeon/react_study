import {createContext, useState} from 'react';

export const AuthContext = createContext(null)

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
