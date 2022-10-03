import { Loader as UIKitLoader } from '../../components' // NOTE: diff from main template
import styles from './index.module.css'

const Loader = () => (
  <div className={styles.main}>
    <UIKitLoader
      style={{
        position: 'fixed',
        right: '20px',
        bottom: '20px',
      }}
    />
  </div>
)

export default Loader
