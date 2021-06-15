const express = require("express");
const router  = express.Router();
const product = require('../model/productModel')

router.get('/getallproducts',(req,res)=>{
    product.find({},(err,docs)=>{
        if(!err)
        {
            return res.send(docs);
        }
        else{
            return res.status(400).json({message:'something went wrong'})
        }
    })
});

module.exports= router