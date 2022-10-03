import React from 'react'
import { animated, useTransition } from 'react-spring'
import { IBus } from 'common/tools'

import initContext, { Context } from './context'
import Error from './Error'
import Loader from './Loader'
import Page from './Page'

interface IMainParams {
  isLoader: boolean
  isAnimate: boolean
  onLoad: () => void
  onError: (error: any) => void
  onDone: () => void
}

interface IMain {
  bus: IBus | null
  params: IMainParams | null
}

const paramsDefault: IMainParams = {
  isLoader: true,
  isAnimate: true,
  onLoad: () => null,
  onError: (error: any) => null,
  onDone: () => null,
}

const Main = ({ bus, params }: IMain) => {
  const { isLoader, isAnimate, onLoad, onError, onDone } = { ...paramsDefault, ...params }
  const [Component, setComponent] = React.useState<React.ReactElement>(
    isLoader ? <Loader /> : <></>,
  )
  const transition = useTransition(Component, {
    from: { opacity: isAnimate ? 0 : 1 },
    enter: { opacity: 1 },
    leave: { opacity: isAnimate ? 0 : 1 },
    config: { duration: 250 },
  })

  const setError = (error: Error | string | unknown) => {
    console.info('[MAIN][ERROR]: ', error)
    setComponent(<Error error={error} />)
    onError(error)
  }

  React.useEffect(() => {
    onLoad()
    try {
      initContext(bus)
        .then(context => {
          setComponent(
            <Context.Provider value={context}>
              <Page />
            </Context.Provider>,
          )
          onDone()
        })
        .catch(setError)
    } catch (error) {
      setError(error)
    }
  }, [])

  return transition((data, component) => (
    <animated.div className="page" style={data}>
      {component}
    </animated.div>
  ))
}

export default Main
export { paramsDefault }
export type { IMain, IMainParams }
