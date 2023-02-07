const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const FoodSchema=new Schema({
    FoodName:{
        type:String,
        required:true
    },
    
    FoodDesc:{
        type:String,
        required:true
    }
});

module.exports=Food=mongoose.model('food',FoodSchema);