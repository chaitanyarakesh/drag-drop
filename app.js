const express = require('express'),
      bodyParser = require('body-parser'),
      //pg = require('pg');
       mongodb=require('mongodb').MongoClient;
    mongoose = require('mongoose');
const dbconfig=require('./config/dbconfig');
const User = require('./models/usermodel');

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port=process.env.PORT||8086;
//const db;
app.use(express.static(__dirname+'/public'))
//mongoose.connect(dbconfig.dburl)

//require('./routes/users')(app)
var db;
mongodb.connect(dbconfig.dburl,function(err,dbconn){
    if(err){
        console.log(err)
    }
    else{
        let dbname = 'drag-drop';
        db= dbconn.db(dbname);
        console.log('mongodb connected');
       // require('./routes/users')(app,db)
    }
})
app.post('/saveUserInfo', (req, res) => {
    console.log(req.body.data[0])
    db.collection("users").insertOne(req.body, function(err, result) {
        if (err) throw err;
        console.log("1 document inserted");
        res.send(result)
      });
    
});
app.listen(port, function(err,result) {
    if(err){
    console.log(err.message);
    }else{
        console.log("app listening port no",port)
    }
});

//Run app, then load http://localhost:port in a browser to see the output.