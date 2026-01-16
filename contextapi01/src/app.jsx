import { useState  } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './componenets/login.jsx'
import Profile from './componenets/profile.jsx'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
     
    </UserContextProvider>
  )
}
