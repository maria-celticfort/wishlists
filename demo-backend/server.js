'use strict';

const express_demo = require('express');

// Constants
const PORT_DEMO = 8085;
const HOST_DEMO = '0.0.0.0';

// App
const app = express_demo();
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT_DEMO, HOST_DEMO, () => {
    console.log(`Running on http://${HOST_DEMO}:${PORT_DEMO}`);
});