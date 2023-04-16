'use strict';

const express = require('express');
const router = express.Router();


const testGetAllController = require('../../controller/apiController/test/testGetAllController');
const testGetByIdController = require('../../controller/apiController/test/testGetByIdController');
// const testCreateController = require('../../controller/apiController/test/testCreateController');
// const testDeleteController = require('../../controller/apiController/test/testDeleteController');
// const testUpdateController = require('../../controller/apiController/test/testUpdateController');


router.get('/test/', testGetAllController.GetAll);
router.get('/test/:id', testGetByIdController.GetById);
// router.post('/test/', testCreateController);
// router.delete('/test/:id', testDeleteController);
// router.patch('/test/:id', testUpdateController);


module.exports = router;