import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'


dotenv.config();    //pull out environment variables from .env file

const app = express(); //initialize express application
app.use(cors());   // additional middlewares
app.use(express.json({limit: '50mb' }))

//to use routes, adding middleware
app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', async (req, res) => {
   res.send('Hello from DALL-E!') 
})


const startServer = async () => {
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(8000, () => console.log('Server running at port http://localhost:8000')) 
    }catch (error){ 
        console.log(error);
    }
    
    
}

startServer();
