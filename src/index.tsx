import { useEffect, useState } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { THEME_KEY_STORAGE } from './constants/localStorageKeys'
import { PostProvider } from './contexts/PostProvider'
import { AppRoutes } from './routes/app.routes'
import GlobalStyles from './styles/GlobalStyles'
import * as themes from './styles/themes'

export function App() {
  const [selectedTheme, setSelectedTheme] = useState<keyof typeof themes>(() => {
    const storedTheme = localStorage.getItem(THEME_KEY_STORAGE)
    return storedTheme ? JSON.parse(storedTheme) : 'light'
  })

  useEffect(() => {
    localStorage.setItem(THEME_KEY_STORAGE, JSON.stringify(selectedTheme))
  }, [selectedTheme])

  return (
    <ThemeProvider theme={themes[selectedTheme]}>
      <GlobalStyles />
      <BrowserRouter>
        <PostProvider>
          <AppRoutes />
        </PostProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
