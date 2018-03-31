const mongoose = require('mongoose');
var userSchema = mongoose.Schema({
	properties :[Object]
})
var User = module.exports = mongoose.model("user",userSchema)
module.exports.saveUser = function(userobj,callback){
	
	
}
 module.exports.getUserInfo=function(db,callback){
    //  db.collection('users').findOne({and:[{email:userobj.email},{password:userobj.password}]},function(err,result){
        db.collection("users").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            return callback(result)
           // db.close();
          });
        
 }