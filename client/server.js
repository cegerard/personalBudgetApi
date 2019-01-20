const marko = require('./project');
const config = require('./config');

// Start marko application server
marko.server({
  httpPort: config.port
});
