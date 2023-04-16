'use strict';

//Fake response
exports.GetById = async (req, res) =>{
    const id = req.params.id;
    console.log('getTestById');
    res.send(`GetTestById ${id}`);

}