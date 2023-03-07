import express from 'express';
import { getSingleAccountTransactions, geTotalSpendBuy } from '../Controllers/Transaction.js';
const router  = express.Router();


router.get('/gettransaction/:account_id',getSingleAccountTransactions)
router.get('/getTotals/:account_id', geTotalSpendBuy)
export default router;
