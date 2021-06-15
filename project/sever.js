const express = require('express')
const app = express()

var dbConnection = require('./db')
const productsRoute = require('./routes/productsRoute')

app.use('/api/products',productsRoute);

app.get('/',(req,res)=>{
    res.send('this is from backend')
});

const port = 8000;

app.listen(port,()=>console.log('node server started'))