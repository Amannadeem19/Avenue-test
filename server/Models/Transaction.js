import mongoose from "mongoose";

const transactionSchema =  mongoose.Schema({

    account_id : {
        type: Number,
        required: true,
        ref: "Account"
    },

    transaction_count:{
        type: Number,
        required: true,
    },
    bucket_start_date:{
        type: Date,
        required: true,
    },
    bucket_end_date:{
        type: Date,
        required: true,
    },
    

    transactions:[
        {
            date: {
                type: Date,
                required: true
            },
            amount:{
                type: Number,
                required: true
            },
            transaction_code:{
                type: String,
                required : true
            },
            symbol:{
                type: String,
                required: true
            },
            price:{
                type:String,
                required: true
            },
            total:{
                type: String,
                required : true
            }
        }
    ]

})

const Transaction = mongoose.model('Transaction', transactionSchema)

export default Transaction;