module.exports.saveUser = function(userobj,db,callback){
    db.collection('users').insertOne(userobj,function(err,result){
        if(err){
         return callback(err);
        }else{
        return callback(result);
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