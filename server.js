const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();
const port = process.env.port || 5000;

mongoose.connect('mongodb://localhost:27017/online-schedule', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    
}, function(err){
    if(err){
        console.log(err)
    }else{
        console.log('MongoDB conectado!')
    }
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(routes);

app.listen(port, function(){
    console.log('Server runing on port', port)
})
