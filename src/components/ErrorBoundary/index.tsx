// NOTE: ALL, TS, ts-ignore

import React from 'react'
import PropTypes from 'prop-types'

import { Failed } from '../Failed'
import { ErrorIcon } from '../Icons'

interface IErrorBoundary {
  children: React.ReactElement
}

class ErrorBoundary extends React.Component<IErrorBoundary> {
  constructor(props: IErrorBoundary) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.info('[COMPONENT][ERROR]: ', error, errorInfo)
  }

  render() {
    // @ts-ignore
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.hasError) {
      console.info('[COMPONENT][ERROR]: Has error')
      return <Failed title="Has error" />
    }
    // @ts-ignore
    return this.props.children // eslint-disable-line react/destructuring-assignment
  }
}

// @ts-ignore
ErrorBoundary.propTypes = {
  children: PropTypes.node,
}

// @ts-ignore
ErrorBoundary.defaultProps = {
  children: null,
}

export { ErrorBoundary }
export type { IErrorBoundary }
