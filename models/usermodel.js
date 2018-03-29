module.exports.saveUser = function(userobj,db,callback){
	console.log(userobj)
/*     db.collection('users').insertOne( {"properties": userobj},{  safe: true, upsert: true},function(err,result){
        if(err){
			console.log(err)
         return callback(err);
        }else{
			console.log(result)
        return callback(result);
        }
    }) */
	console.log(userobj.chkId)
	console.log({ "modal_properties.chkId": userobj.chkId })
	db.collection('user').findOne({ "modal_properties.chkId": userobj.chkId },function(err,result){
		console.log(result)
		if(err){
			console.log(err)
		}
		else if(result){
			db.collection('users').update({ "modal_properties.chkId": userobj.chkId },{$push:{"modal_properties": userobj}},{  safe: true, upsert: true},function(err,result){
				if(err){
					console.log(err)
				 return callback(err);
				}else{
				return callback(result);
				}
			})
		}
		else{
			db.collection('users').insertOne( {"modal_properties": {userobj}},function(err,result){
				if(err){
					console.log(err)
				 return callback(err);
				}else{
					console.log("inserted")
				return callback(result);
				}
			})
		}
	})
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