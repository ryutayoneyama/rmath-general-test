const express = require('express');
const router = express.Router();
const db = require('../models/index');

router.get('/test1',async (req,res)=>{
    const tests = await db.Test.findAll({});
    res.send(tests);
});

router.get('/test2',async (req,res)=>{
    const tests = await db.test2.findAll({});
    res.send(tests);
});

module.exports = router;
