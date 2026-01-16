import {createContext,useContext} from 'react';
export const ThemeContext=createContext({
    themeMode:"light",
    darktheme:()=>{},
    lighttheme:()=>{},
})
export const ThemeProvider=ThemeContext.Provider;
export default function useTheme(){
    return useContext(ThemeContext);
}
//createContext — WATER TANK BANANA
// export const ThemeContext = createContext({
//   themeMode: "light",
//   darktheme: () => {},
//   lighttheme: () => {},
// });Ek global jagah bana do jahan theme related cheezein rakhi jaa sakti hain”
//e functions khali kyu hain? ()=>{} 🤔

// Because:

// Context sirf shape define karta hai

// Actual logic baad me aata hai (Provider me)

// Socho:

// Tank ka design bana diya
// paani baad me bharenge
// ThemeContext.Provider — TANK BHARNA
// export const ThemeProvider = ThemeContext.Provider;

// 🧠 Simple:

// “Jo cheez tank me paani bharti hai, uska naam short kar diya”
// useContext — PANI NIKAALNA

// Normally likhna padta:

// useContext(ThemeContext)
// ThemeContext   ← tank bana
//      ↑
// ThemeProvider ← tank bhara
//      ↑
// useTheme()    ← pipe
//      ↑
// Component     ← paani mila
// import { useContext } from 'react'-----THIS IS USETHEME CUSTOM HOOOK NIA BNATE HUM BUT NOW WE MADE IT SO YEAH
// import { ThemeContext } from './ThemeContext'

// const { themeMode } = useContext(ThemeContext)
// import useTheme from './ThemeContext'--NOW USECONTEXT(THEMECONTEXT) YE NAI LIKHNA PADA SHORT KAR DIYE SO ACCHA HO GYA KAAM

// const { themeMode } = useTheme()
// Context = global state
// Provider = data dene wala
// useContext = data lene wala
// Custom Hook (useTheme) = easy access shortcut
