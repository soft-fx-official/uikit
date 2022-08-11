import React from 'react'
import { IBus } from 'common/tools'

import initContext, { Context } from './context'
import Error from './Error'
import Loader from './Loader'
import Page from './Page'

interface IMain {
  bus: IBus | null
}

const Main = ({ bus }: IMain) => {
  const [Component, setComponent] = React.useState<React.ReactElement>(<Loader />)

  const setError = (error: Error | string | unknown) => {
    console.info('[MAIN][ERROR]: ', error)
    setComponent(<Error error={error} />)
  }

  React.useEffect(() => {
    try {
      initContext(bus)
        .then(context => {
          setComponent(
            <Context.Provider value={context}>
              <Page />
            </Context.Provider>,
          )
        })
        .catch(setError)
    } catch (error) {
      setError(error)
    }
  }, [])

  return Component
}

export default Main
