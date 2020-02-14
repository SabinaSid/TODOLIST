const express=require('express');
const urlencoded=require('body-parser').urlencoded({extended:true});

let port=80;
let app=express();

app.set('view engine','pug');

app.use(express.static(__dirname+'public'));
app.use(urlencoded);
app.listen(port,()=>{
    console.info(`App run on http://localhost:${port}`);
});