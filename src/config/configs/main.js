const config = {
  appName: 'uikit',
  theme: 'main',
  exposes: {
    './themes': './src/themes',
    './components': './src/components',
    './icons': './src/icons',
  },
  remotes: {
    common: 'common@https://common.s3w.soft-fx.lv/main/remoteEntry.js',
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

module.exports = config
