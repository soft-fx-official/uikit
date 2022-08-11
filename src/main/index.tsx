import React from 'react'

import { Error } from './Error'
import { Loader } from './Loader'
import { Page } from './Page'

const Main = () => {
  const [Component, setComponent] = React.useState<React.ReactElement>(<Loader />)

  React.useEffect(() => {
    try {
      setComponent(<Page />)
    } catch (error) {
      console.info('[ERROR][MAIN]: ', error)
      setComponent(<Error error={error} />)
    }
  }, [])

  return Component
}

export { Main }
