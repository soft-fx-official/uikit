import React from 'react'
import { useDynamicScript } from 'common/hooks'
import { IBus, loadDynamicComponent } from 'common/tools'

import ErrorBoundary from '../ErrorBoundary'
import styles from './index.module.css'

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
    return <span className={styles.message}>Not system specified</span>
  }

  if (!ready) {
    return <span className={styles.message}>Loading dynamic script: {url}</span>
  }

  if (failed) {
    return <span className={styles.message}>Failed to load dynamic script: {url}</span>
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

export default ModuleLoader
export type { IModuleLoader }
