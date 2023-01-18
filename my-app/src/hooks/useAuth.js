import { userData } from "../data/userData"
import {useContext, useEffect, useState} from 'react'
import {AuthContext} from '../context/AuthContext'

export function useAuth(){
  const value = useContext(AuthContext)
  const [idCheck,setIdCheck] = useState()
  const [passwordCheck, setPasswordCheck] = useState()
  const loginIdPasswordCheck = (loginId,password) => {
    setIdCheck(userData.some(item => {
      return item.loginId === loginId
    }))
    setPasswordCheck(userData.some(item => {
      return item.password === password
    }))
  }
  const action = (loginId, password) => {
    if(!idCheck){
      alert("아이디가 일치하지 않습니다")
    } else if(!passwordCheck){
      alert("비밀번호가 일치하지 않습니다")
    } else{
      value.setUser(userData.filter(item => item.loginId === loginId && item.password === password))
    }
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


  return [{...value}, action, logout, loginIdPasswordCheck]
}