const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 27017;

var linkConexao = 'mongodb://localhost:27017/react_project'

mongoose.connect(linkConexao,{
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useFindAndModify: false
},function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('Conectado com sucesso!');
    }
})

app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.get('/',function(req,res){
    res.json({message:'Hello World'});
});

app.listen(port,function(){
    console.log(`Server running on port ${port}`);
});