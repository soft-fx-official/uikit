import React, { useCallback, useMemo, useState } from 'react'

import { ThemeProvider } from '@mui/material'

import initTheme from './index'

const ThemeContext = React.createContext({
  isDark: true,
  toggleColorMode: () => {},
})

export const useThemeContext = () => React.useContext(ThemeContext)

interface ThemeContextProviderProps {
  children: React.ReactNode
}

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [isDark, setDark] = useState(true)

  const toggleColorMode = useCallback(() => setDark(prevState => !prevState), [])

  const updateTheme = useMemo(
    () =>
      initTheme({
        palette: {
          mode: isDark ? 'dark' : 'light',
        },
      }),
    [isDark],
  )

  const contextValue = useMemo(() => ({ isDark, toggleColorMode }), [isDark, toggleColorMode])

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={updateTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
