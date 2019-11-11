//imports and dependencies
const server = require('./backend/server');

//server & port
const PORT = process.envPORT || 5000;
server.listen(PORT, () => console.log(`***sims server is listening on port ${PORT}***`) );