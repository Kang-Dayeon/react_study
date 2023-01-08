import {createContext, useContext, useState} from 'react';
import { userData } from "../../data/userData";

export const AuthContext = createContext()

export function AuthProvider({children}) {
    const [user, setUser] = useState([])

    const action = (id, pw) => {
        setUser(userData.filter(list => list.loginId === id && list.password === pw))
    }
    const value = [user, action]
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const value = useContext(AuthContext)
    if(value === undefined){
        throw new Error('error')
    }
    return value
}