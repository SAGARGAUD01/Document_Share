const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    filename: { type: String, required: true },
    path: { type: String, required: true },
    size: { type: Number, required: true },
    uuid: { type: String, required: true },
    sender: { type: String, required: false },
    receiver: { type: String, required: false },
}, { timestamps: true });

module.exports = mongoose.model('File', fileSchema);


// To delete all files from the database
// const File=require('./models/file');
// File.find({}, (error,files)=>{
//     if(error){
//         console.log(error);
//     }else{
//         files.map(file=>{
//             file.remove();
//         })
//     }
// } );
