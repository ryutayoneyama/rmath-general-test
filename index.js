const express = require('express');
const app = express();
const port = process.env['PORT'] || 4001;

const testRouter = require('./router/test.js');

app.get('/' , (req,res)=>{
    res.send('hello');
});

app.use('/test', testRouter);

app.listen(port, (err)=>{
    if(err) {
        console.log('error happened');
        throw err;
    }
    console.log(`server listened by port ${port} ...`);
});