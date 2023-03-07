import mongoose from "mongoose";
import Account from "./Account.js";

const customerSchema = mongoose.Schema({

    username:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true,
    },
    address:{
        type:String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    active:{
        type: Boolean,
        required: true
    },
    accounts:[
        {
            type: Number,
            ref: 'Account',
            required: true
        }
    ]
    ,
    tier_and_details:[
        {
            tier:{
                type: String,
                required: true
            },
            id:{
                type: String,
                required: true
            },
            active:{
                type: Boolean,
                required: true
            },
            benefits:{
                type: [String],
                required: true
            }
        }
    ]
})

const Customer =  mongoose.model('Customer', customerSchema)

export default Customer;