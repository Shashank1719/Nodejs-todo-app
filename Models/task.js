const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    //name:String,    // in this if we pass empty name than also it will store it into the database

    // below is an another option(validators) to validate input
    /* i.e.     1) type: input type 
                2) reuired: making the field is mandatory
                3) trim: will remove all redundant spaces
                4) maxlength: it will fix input length

    */
    name:{
        type:String,
        required:true, //or required: [true, 'must provide name']
        trim:true,
        maxlength:[20, 'Name can not be more than 20 characters']
    },
    completed:{
        type: Boolean,
        default:false
    }
})

module.exports = mongoose.model('Tasks', TaskSchema);