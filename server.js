console.log('introduction to express');
const express=require('express')
const app=express()
const port=5000;

app.use(express.static("public"));
app.listen(5000,(err)=>{
    err ? console.log(err): console.log('the server is running on port 5000')
})
