import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();    //puull out environment variables from .env file

const app = express(); //initialize express application
app.use(cors());   // additional middlewares
app.use(express.json({limit: '50mb' }))

app.get('/', async (req, res) => {
   res.send('Hello from DALL_E!') 
})


const startServer = async () => {
    app.listen(8000, () => console.log('Server running at port http://localhost.8000'))
}

startServer();
