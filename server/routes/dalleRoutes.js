import express from 'express';
import * as dotenv from 'dotenv';
import { OpenAI }  from 'openai';




dotenv.config();  //to make sure, environmental variables are getting populated



const router = express.Router();

//initializing openAI API through API key
const openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY,
});


router.route('/').get((req, res)=>{
    res.send('HELLO from DALL-E!');
})

export default router;