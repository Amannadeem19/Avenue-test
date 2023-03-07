import Account from "../Models/Account.js"

export const getAccounts = async  (req, res)=>{
        const {id} = req.params
        try{
        const account_detail = await Account.findOne({_id : id})
            res.status(200).json(account_detail)
        }catch(err){
            res.status(404).json({message: err.message})
        }
     
}

