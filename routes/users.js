const User  = require('./../models/usermodel');
module.exports=function(app,db){
    //console.log(db)
app.post('/saveUserInfo',function(req,res){
    
    User.saveUser(req.body,db,function(savedInfo){
        res.send(savedInfo)
    })
})

app.get('/getUserInfo',function(req,res){
    User.getUserInfo(db,function(getinfo){
        res.send(getinfo)
    })
})

}
