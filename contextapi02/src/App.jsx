import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import { useEffect } from 'react'
import card from './components/card.jsx'
import ThemeButton from './components/ThemeButton.jsx'
import Card from './components/card.jsx'

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lighttheme = () => setThemeMode("light");
  const darktheme = () => setThemeMode("dark");
  //main change of theme ye use effect ka rrha hia

  useEffect(() => {
  document.querySelector('html').classList.remove("light", "dark")
  document.querySelector('html').classList.add(themeMode)
}, [themeMode])

  const [count, setCount] = useState(0)

  return (
    <>
<ThemeProvider value={{themeMode,lighttheme,darktheme}}>      
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                     <ThemeButton />
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                     
                        <Card />
                    </div>
                </div>
            </div>

    </ThemeProvider>
    </>
  )
}

export default App
