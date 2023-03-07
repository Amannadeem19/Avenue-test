import Customer from "../Models/Customer.js";
import Account from "../Models/Account.js";


export const getCustomer = async (req, res)=>{

    const {username} = req.params;
    try {
        const getcustomer = await Customer.findOne({username: username});
        let account_len= getcustomer.accounts.length
        let account_details = [];
        for(let i=0; i<account_len; i++){
            let acc_id = getcustomer.accounts[i];
            let acc = await Account.findOne({account_id: acc_id});
            account_details.push(acc);
        }
        console.log(account_details);

        let customer_details = {
            "_id": getcustomer._id,
            "username": getcustomer.username,
            "name" : getcustomer.name,
            "address" : getcustomer.address,
            "birthdate": getcustomer.birthdate,
            "email": getcustomer.email,
            "active": getcustomer.active,
            "accounts": account_details,
             "tier_and_details" : getcustomer.tier_and_details    
        }
        res.status(200).json(customer_details)
    } catch (error) {
        res.status(404).json({message:error.message});
    }

}