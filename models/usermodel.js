const mongoose = require('mongoose');
var userSchema = mongoose.Schema({
	properties :[Object]
})
var User = module.exports = mongoose.model("user",userSchema)
module.exports.saveUser = function(userobj,callback){
	console.log(userobj)
	User.find({ "modal_properties.userobj.chkId": userobj.chkId },function(err,result){
		if(err){
			console.log(err)
		}
		else if(result){
			User.updateOne({ "modal_properties.userobj.chkId": userobj.chkId },{$push:{"modal_properties.userobj.chkId":userobj}},function(err,updated){
				if(err){
					console.log(err);
					return callback(err)
				}
				else{
					return callback(updated)
				}
			})
		}
		else{
			const user = new User();
			user.modelprop = userobj;
			user.save(function(err,saved){
				if(err){
					return callback(err)
				}
				else{
					return callback(saved)
				}
			})
		}
	})
	

/*     db.collection('users').insertOne( {"properties": userobj},{  safe: true, upsert: true},function(err,result){
        if(err){
			console.log(err)
         return callback(err);
        }else{
			console.log(result)
        return callback(result);
        }
    }) */
	
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