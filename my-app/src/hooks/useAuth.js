import { userData } from "../data/userData"
import {useContext, useEffect} from 'react'
import {AuthContext} from '../context/AuthContext'

export function useAuth(){
  const value = useContext(AuthContext)
  const action = (loginId, password) => {
    value.setUser(userData.filter(item => item.loginId === loginId && item.password === password))
  }
  const logout = () => {
    value.setUser([])
    value.setIsLogin(false)
  }
  if(value === undefined){
    throw new Error('context를 찾을 수 없습니다.')
  }
  useEffect(() => {
    if(value.user.length > 0) value.setIsLogin(true)
  }, [value.user])

  return [{...value}, action, logout]
}