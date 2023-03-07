import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
const avenue_App = express()
import ConnectDB from './ConnectDB/connect.js'
// account router 
import accountRouter from './Routes/Account.js'

//transaction router
import transactionRouter from './Routes/Transaction.js'

// customer router 
import customerRouter from './Routes/Customer.js'

avenue_App.use(bodyParser.json({limit: "30mb", extended: true}))
avenue_App.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
avenue_App.use(cors())

// inorder to run the dotenv file we have to confiure it with app 
dotenv.config()

const PORT = process.env.PORT || 5000

avenue_App.use('/account', accountRouter)
avenue_App.use('/transaction', transactionRouter)
avenue_App.use('/customer', customerRouter)
const startApp = async ()=>{
    try {
        await  ConnectDB(process.env.MONGO_URI)
        avenue_App.listen(PORT, ()=>{
            console.log(`Server is listening on the port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
startApp()