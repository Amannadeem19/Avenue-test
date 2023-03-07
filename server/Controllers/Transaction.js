import Transaction from "../Models/Transaction.js";


export const getSingleAccountTransactions = async (req,res)=>{

    const   {account_id} =  req.params;
    try {
        const myTransaction = await Transaction.findOne({account_id: account_id});
    res.status(200).json(myTransaction)
    } catch (error) {
        res.status(404).json({message : error.message});
    }
    

}

export const geTotalSpendBuy = async(req, res)=>{
    const {account_id} = req.params;
    let total_sell = 0, total_buy = 0;
    try {
        const data = await Transaction.findOne({account_id: account_id});
        const transArray = data.transactions;
        for(let i=0; i<transArray.length; i++){
            if(transArray[i].transaction_code == "buy"){
                total_buy =+ transArray[i].amount;
            }else if(transArray[i].transaction_code == "sell"){
                total_sell += transArray[i].amount;
            }
        }
        res.status(200).json({total_amount_sold: total_sell, total_amount_bought: total_buy });
    } catch (error) {
        res.status(404).json({message: error.message});
        
    }
}