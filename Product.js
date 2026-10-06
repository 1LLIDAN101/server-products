const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        require: [true , "Название обязательно!"],
        trim: true
    },
        description: {
        type:String,
        require: [true , "Описание обязательно!"],
        trim: true
    },
        price:{
        type: Number,
        require:[true , "Цена обязательна!"],
        min: 0
    }
})



module.exports = mongoose.model('Product' , productSchema)
