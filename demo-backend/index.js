'use strict';

const server= require('./server/server');

// Constants
const PORT_DEMO = 8085;
const HOST_DEMO = '0.0.0.0';

server.listen(PORT_DEMO, HOST_DEMO, () => {
    console.log(`Running on http://${HOST_DEMO}:${PORT_DEMO}`);
});