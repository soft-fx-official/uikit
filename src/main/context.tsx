import React, { useCallback, useMemo, useState } from 'react'

import { ThemeProvider } from '@mui/material'

import { initTheme } from '../themes'

const ThemeContext = React.createContext({
  isDark: true,
  toggleColorMode: () => {},
})

export const useThemeContext = () => React.useContext(ThemeContext)

interface IThemeContextProvider {
  children: React.ReactNode
}

const ThemeContextProvider = ({ children }: IThemeContextProvider) => {
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

export { ThemeContextProvider }
export type { IThemeContextProvider }
