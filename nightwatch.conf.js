var SELENIUM_CONFIGURATION = {
  start_process: true,
  server_path: './node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.0.1.jar',
  host: '127.0.0.1',
  port: 4444
};

var CHROME_CONFIGURATION = {
  browserName: 'chrome',
  javascriptEnabled: true,
  acceptSslCerts: true
};

var DEFAULT_CONFIGURATION = {
  launch_url: 'http://localhost:2000',
  selenium_port: 4444,
  selenium_host: 'localhost',
  silent: true,
  desiredCapabilities: CHROME_CONFIGURATION
};

var ENVIRONMENTS = {
  default: DEFAULT_CONFIGURATION
};

module.exports = {
  src_folders: ['test/specs'],
  page_objects_path: 'test/pages',
  selenium: SELENIUM_CONFIGURATION,
  test_settings: ENVIRONMENTS
};
