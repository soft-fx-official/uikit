import React from 'react'

import config from '../config'

import Loader from './Loader'
import Error from './Error'
import Page from './Page'

import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import './index.css'

// NOTE: Status (load, error, page) in useState
// NOTE: Animated appearance of components
const Main = () => {
  const [Component, setComponent] = React.useState<React.ReactElement>(<Loader />)

  React.useEffect(() => {
    document.title = config.title
    try {
      setComponent(<Page />)
    } catch (error) {
      console.info('[ERROR][MAIN]: ', error)
      setComponent(<Error error={error} />)
    }
  }, [])

  return Component
}

export default Main
