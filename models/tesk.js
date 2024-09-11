const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"must mpovide name"],
        trim: true,
        maxlength:[20, "name can note be more than 20 caracteres"]
    },
    completed:{
        type:Boolean,
        default:false
    }
})
module.exports = mongoose.model('Task', TaskSchema)