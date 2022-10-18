const fs = require('fs');
const path = require('path');
const download = require('download');

require('dotenv').config();

(async () => {
  const configurationPathFile = path.resolve(__dirname, `../${process.env.CONFIGURATION_PATH_FILE}`);
  console.log('[CONFIGURATION][URL:FILE]', process.env.CONFIGURATION_URL_FILE, configurationPathFile);
  fs.writeFileSync(configurationPathFile, await download(process.env.CONFIGURATION_URL_FILE));
})();
