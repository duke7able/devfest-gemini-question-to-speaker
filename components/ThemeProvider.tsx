'use client'

import { createContext, useContext, useEffect } from 'react'

const ThemeContext = createContext('')

export function ThemeProvider({ color, children }: { color: string; children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.style.setProperty('--theme-color', color)
    document.documentElement.style.setProperty('--theme-color-light', `${color}33`)
  }, [color])

  return <ThemeContext.Provider value={color}>{children}</ThemeContext.Provider>
}

export const useThemeColor = () => useContext(ThemeContext)

