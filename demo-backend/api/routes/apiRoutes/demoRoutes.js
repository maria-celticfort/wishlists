'use strict';

const express = require('express');
const router = express.Router();

const demoGetAllController = require('../../controller/apiController/demo/demoGetAllController');
const demoGetByIdController = require('../../controller/apiController/demo/demoGetByIdController');
// const demoCreateController = require('../../controller/apiController/demo/demoCreateController');
// const demoDeleteController = require('../../controller/apiController/demo/demoDeleteController');
// const demoUpdateController = require('../../controller/apiController/demo/demoUpdateController');


router.get('/demo/', demoGetAllController.GetAll);
router.get('/demo/:id', demoGetByIdController.GetById);
// router.post('/demo/', demoCreateController);
// router.delete('/demo/:id', demoDeleteController);
// router.patch('/demo/:id', demoUpdateController);


module.exports = router;