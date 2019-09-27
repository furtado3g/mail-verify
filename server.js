const express = require('express');
const request = require('request');
const fs = require('fs');
const app = express();


app.use('/:mail',(req,res)=>{
    request('https://api.trumail.io/v2/lookups/json?email='+req.params.mail,(err,resposta,requisitado)=>{
        result = resposta.body;
        return res.send(result);
    });
})
app.get('/',(req,res)=>{
    var content;
    fs.readFile('./src/view/index.html', function read(err, data) {
        if (err) {
            throw err;
        }
        res.send(data.toString());
    });
})

app.listen(8080);