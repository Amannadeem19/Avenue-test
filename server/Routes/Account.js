import express from 'express';
import { getAccounts } from '../Controllers/Account.js';

const router  = express.Router();

router.get('/getAccounts/:id', getAccounts);

export default router;
                                        