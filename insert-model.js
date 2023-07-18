const { Int32 } = require('mongodb');
let mongoose=require('mongoose');
let db = require('./database');


var foodSchema = new mongoose.Schema({
    food_name: String,
    food_image:String,
    price: Int32
});

foodTable=mongoose.model('food',foodSchema);


module.exports={
    createData:function(inputData, callback){
                 
       userData= new userTable(inputData);
       userData.save(function(err, data){
         if (err) throw err;
          return callback(data);
       });
    }
}
