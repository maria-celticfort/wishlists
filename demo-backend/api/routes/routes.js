'use strict';

const demoRoutes = require('./apiRoutes/demoRoutes');
const testRoutes = require('./apiRoutes/testRoutes');

const routers = (app) =>{
    app.use('/api/v1',demoRoutes);
    app.use('/api/v1',testRoutes);
};

module.exports = routers;