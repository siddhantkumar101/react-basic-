import React from 'react'
import UserContext from '../context/UserContext'

function profile() {
  const{user}=React.useContext(UserContext)
  if(!user){
    return <div>Please login to view profile</div>
  }
  return <div>welcome {user.username}</div>
}

export default profile