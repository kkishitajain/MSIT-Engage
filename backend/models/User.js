const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    user_id:{
        type:String
    },
    appliedTo:[
        {type:mongoose.Schema.Types.ObjectId}
    ],
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    cg:{
        type:Number
    },
    tenth:{
        type:Number,
    },
    twelfth:{
        type:Number
    },
    branch:{
        type:String,
        required:true
    },
    profile:{
        type:String
    }
});

module.exports=mongoose.model('user',UserSchema);