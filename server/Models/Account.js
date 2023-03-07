import mongoose from "mongoose";

const accountSchema = mongoose.Schema({

    account_id:{
        type: Number,
        required: true
    },
    limit:{
        type: Number,
        required: true
    },
    products: 
        {
            type: [String],
            required: true
        }
    
})

const Account = mongoose.model('Account', accountSchema);

export default Account;