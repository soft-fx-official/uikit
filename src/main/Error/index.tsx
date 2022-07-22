import React from 'react'

import styles from './index.module.css'

interface IError {
  error: Error | unknown
}

const Error = ({ error }: IError) => (
  <div className={styles.main}>
    <div className={styles.error}>Error</div>
    <div className={styles.description}>{String(error)}</div>
    <div className={styles.advice}>Please, reload the page after a while ...</div>
  </div>
)

export { Error }
