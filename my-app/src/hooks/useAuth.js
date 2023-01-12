import { userData } from "../data/userData"
import {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'

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