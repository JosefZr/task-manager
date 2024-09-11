const mongoose = require("mongoose")

const connectDB = (url)=>{
    return mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:true,
        useCreateIndex:true
    })
}
// mongoose
//     .connect(connectionString)
//     .then(()=> console.log("connected to the database..."))
//     .catch((err)=>console.log(err))

module.exports = connectDB