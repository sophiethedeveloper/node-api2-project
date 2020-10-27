const server = require('./server.js')
const PORT = 6000;

// Listen for incoming requests
server.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`);
  });