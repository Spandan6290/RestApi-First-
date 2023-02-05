const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name:{  
        type: String,
        required: true
    }, 
    price:{
        type: Number,
        required: [true, "price must be provided"]
    },
    feature:{
        type: Boolean,
        default: false
    },
    rating:{
        type: Number,
        default: 4.9
    },
    createAt:{
        type: Date,
        default: Date.now()
    },
    company:{
        type: String,
        enum:{
            values:["Samsung","apple","Dell","Hp","Vivo"],
            message: `{VALUE} is not supported`
        },
        required: true
    }
  });

  module.exports = mongoose.model("Product",productSchema);