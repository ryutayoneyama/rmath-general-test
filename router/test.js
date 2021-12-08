const express = require('express');
const router = express.Router();
const db = require('../models/index');

router.get('/',async (req,res)=>{
    const tests = await db.Test.findAll({});
    res.send(tests);
});

module.exports = router;
