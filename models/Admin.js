const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const {isEmail}=require('validator');

const AdminSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:[true,'Please enter an email'],
        unique:true,
        lowercase:true,
        validate:[isEmail,'Please Enter a valid email']
    },
    password:{
        type:String,
        required:[true,'Please enter an password'],
        minlength:[6,'Minimum password length is 6 characters']

    }
});

module.exports=Admin=mongoose.model('admin',AdminSchema);