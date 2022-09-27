import React, { lazy, useEffect, useState } from 'react'
import { animated, useTransition } from 'react-spring'
import { useDynamicScript } from 'common/hooks'
import { IBus, loadDynamicComponent } from 'common/tools'

import { CircularProgress } from '@mui/material'

import { ErrorBoundary } from '../ErrorBoundary'
import { Failed } from '../Failed'

interface IModuleLoader {
  url: string
  scope: string
  module: string
  bus: IBus | null
  fallback: React.ReactElement | string | undefined
  onError: () => void
  onLoad: () => void
  onDone: () => void
}

enum EStatus {
  load,
  failed,
  error,
  done,
}

const ModuleLoader = ({
  url,
  scope,
  module,
  bus,
  fallback,
  onError = () => null,
  onLoad = () => null,
  onDone = () => null,
}: IModuleLoader) => {
  const { ready, failed } = useDynamicScript(url)

  const [status, setStatus] = useState<EStatus>(EStatus.load)

  useEffect(() => {
    if (!url || !scope || !module) {
      setStatus(EStatus.error)
    } else if (failed) {
      setStatus(EStatus.failed)
    } else if (!ready) {
      setStatus(EStatus.load)
    } else if (ready) {
      setStatus(EStatus.done)
    } else {
      setStatus(EStatus.load)
    }
  }, [url, scope, module, ready, failed])

  const transitions = useTransition(status, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 250,
    config: { duration: 500 },
  })

  return transitions((data, item) => {
    let Component = <></>

    if (item === EStatus.error) {
      Component = <Failed title="Not system specified" />
      onError()
    }

    if (item === EStatus.failed) {
      Component = <Failed title={`Failed to load dynamic script: ${url}`} />
      onError()
    }

    if (item === EStatus.load) {
      // Component = <CircularProgress sx={{ position: 'absolute', top: 0, right: 0 }} />
      Component = <></>
      onLoad()
    }

    if (item === EStatus.done && ready) {
      const ComponentLazy = lazy(loadDynamicComponent(scope, module))
      Component = (
        <ErrorBoundary>
          <React.Suspense fallback={fallback}>
            <ComponentLazy bus={bus} />
          </React.Suspense>
        </ErrorBoundary>
      )
      onDone()
    }

    return (
      <animated.div
        style={{
          position: 'absolute',
          top: '0',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          minHeight: '100%',
          opacity: data.opacity,
        }}
      >
        {Component}
      </animated.div>
    )
  })
}

export { ModuleLoader }
export type { IModuleLoader }
