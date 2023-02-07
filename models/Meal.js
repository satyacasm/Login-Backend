const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const food=require('./Food');
const {isEmail}=require('validator');

const MealSchema=new Schema({
    name:{ type:String },
    foods:[{ type: Schema.Types.ObjectId, ref: 'food' }]
});

module.exports=Meal=mongoose.model('user',MealSchema);