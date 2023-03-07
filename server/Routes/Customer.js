import express from 'express'
import { getCustomer } from '../Controllers/Customer.js'
const router =  express.Router();

router.get('/getCustomer/:username', getCustomer)
export default router;