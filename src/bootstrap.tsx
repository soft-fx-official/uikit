import ReactDOM from 'react-dom/client'

import config from './config'
import Main from './main'

ReactDOM.createRoot(
  document.querySelector(
    `[data-name="${config.elementName}"][data-app="${config.appName}"]`,
  ) as HTMLElement,
).render(<Main bus={null} params={null} />)
