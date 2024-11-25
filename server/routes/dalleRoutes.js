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


//route to make call to openai dalle api and based on prompt it will generate image
//use of an async func, since it takes time. 
router.route('/').post(async (req, res) => {
    try {
       const {prompt} = req.body //this prompt will come from frontend on the basis of which ai will generate image

       const aiResponse = await openai.createImage({
        prompt,
        n: 1,
        size: '1024x1024',
        response_format: 'b64_json',
       });

       //separating image from aiResponse
       const image = aiResponse.data.data[0].b64_json;

       res.status(200).json({ photo: image });

    } catch (error) {
       console.log(error);
       res.status(500).send(error?.response.data.error.message) 
    }
})
export default router;