const mongoose=require('mongoose');

const NotesSchema=new mongoose.Schema({
    c_id:{ //id of this company
        type:String,
        required:true
    },
    appliedUsers:[
        {type:mongoose.Schema.Types.ObjectId}
    ],
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    ctc:{
        type:String,
    },
    deadline:{
        type:Date,
        default:Date.now
    },
    location:{
        type:String,
    },
    role:{
        type:String,
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
    branch:
        {type:String}
    
});

module.exports=mongoose.model('notes',NotesSchema);