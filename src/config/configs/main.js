module.exports = {
  appName: process.env.REACT_APP_NAME,
  elementName: process.env.REACT_APP_ELEMENT_NAME,
  theme: 'main',
  exposes: {
    './themes': './src/themes',
    './components': './src/components',
    './icons': './src/icons',
  },
  remotes: {
    common: 'common@https://s3w.fxopen.com/common/main/remoteEntry.js',
  },
  i18next: {
    debug: process.env?.REACT_APP_DEBUG_LEVEL === 'DEBUG',
    fallbackLng: 'en',
    supportedLngs: ['en'],
  },
  api: {
    main: {
      // baseUrl: 'https://api.fxopen.b2et.com',
      baseUrl: 'https://api.fxopen.co.uk',
    },
  },
}
