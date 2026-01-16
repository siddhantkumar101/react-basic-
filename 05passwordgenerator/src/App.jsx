import { useState, useCallback, useEffect } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(12)
  const [numberallowed, setnumberallowed] = useState(true)
  const [specialallowed, setspecialallowed] = useState(true)
  const [password, setpassword] = useState('')

  const generatepassword = useCallback(() => {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numberallowed) {
      chars += '0123456789'
    }
    if (specialallowed) {
      chars += '!@#$%^&*()_+~`|}{[]:;?><,./-='
    }

    let generatedpassword = ''
    for (let i = 0; i < length; i++) {
      const randomindex = Math.floor(Math.random() * chars.length)
      generatedpassword += chars[randomindex]
    }
    setpassword(generatedpassword)
  }, [length, numberallowed, specialallowed])

  useEffect(() => {
    generatepassword()
  }, [generatepassword])    
  return (
    <>
      <>
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
    <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-6 space-y-6">

      {/* Title */}
      <h1 className="text-2xl font-bold text-white text-center">
        Password Generator
      </h1>

      {/* Password Display */}
      <div className="relative">
        <input
          type="text"
      
          value={password}
          readOnly
          className="w-full px-4 py-3 rounded-lg bg-gray-900 text-green-400 font-mono text-lg tracking-wider outline-none"
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-white"

        >
          Copy
        </button>
      </div>

      {/* Length Slider */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-gray-300">
          <span>Password Length</span>
          <span className="font-semibold text-white">
            {/* length value */}
          </span>
        </div>

        <input
          type="range"
          min="6"
          max="32"
          className="w-full accent-green-500 cursor-pointer"
          value={length}
          onChange={(e) => setlength(e.target.value)}
        />
        <label>length:{length}</label>
      </div>

      {/* Options */}
      <div className="space-y-4">

        <label className="flex items-center justify-between text-gray-300">
          <span>Include Numbers</span>
          <input
            type="checkbox"
            defaultChecked={numberallowed}
            id="numberallowed"
            onChange={
              ()=>{
                setnumberallowed((prev)=>(!prev))
              }
            }
            className="w-5 h-5 accent-green-500"
          />
        </label>

        <label className="flex items-center justify-between text-gray-300">
          <span>Include Special Characters</span>
          <input
            type="checkbox"
            defaultChecked={specialallowed}
            id="specialallowed"
            onChange={
              ()=>{
                setspecialallowed((prev)=>(!prev))
              }
            }
            className="w-5 h-5 accent-green-500"
          />
        </label>

      </div>

      {/* Hint */}
      <p className="text-xs text-gray-400 text-center">
        Password updates automatically
      </p>

    </div>
  </div>
</>

    </>
  )
}

export default App
