'use strict';

//Fake response
exports.GetById = async (req, res) =>{
    const id = req.params.id;
    console.log('getByDemoId');
    res.send(`GetDemoById ${id}`);

}