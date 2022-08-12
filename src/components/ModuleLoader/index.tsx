import React from 'react'
import { useDynamicScript } from 'common/hooks'
import { IBus, loadDynamicComponent } from 'common/tools'

import { CircularProgress } from '@mui/material'

import { ErrorBoundary } from '../ErrorBoundary'
import { CancelModalIcon } from '../Icons'

interface IModuleLoader {
  url: string
  scope: string
  module: string
  bus: IBus | null
  fallback: React.ReactElement | string | undefined
}

const ModuleLoader = ({ url, scope, module, bus, fallback }: IModuleLoader) => {
  const { ready, failed } = useDynamicScript(url)

  if (!module) {
    console.info(`[MODULE LOADER][ERROR]: Not system specified`)
    return <CancelModalIcon />
  }

  if (!ready) {
    console.info(`[MODULE LOADER][READY]: Loading dynamic script: ${url}`)
    return <CircularProgress />
  }

  if (failed) {
    console.info(`[MODULE LOADER][FAILED]: Failed to load dynamic script: ${url}`)
    return <CancelModalIcon />
  }

  const Component = React.lazy(loadDynamicComponent(scope, module))

  return (
    <React.Suspense fallback={fallback}>
      <ErrorBoundary>
        <Component bus={bus} />
      </ErrorBoundary>
    </React.Suspense>
  )
}

export { ModuleLoader }
export type { IModuleLoader }
