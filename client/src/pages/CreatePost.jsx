import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import {preview} from '../assets';
import {getRandomPrompt} from '../utils';
import {FormField, Loader} from '../components';




const CreatePost = () => {
  const navigate = useNavigate(); // const navigate hook navigates to home page once posts are created 
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: ''
    //this will be an object with empty string
  })
  const [generatingImg, setGeneratingImg] = useState(false); // used while contacting with api and waiting to get image
  const [loading, setLoading] = useState(false); //general loading

  //btn for generating image
  const generateImage = async () => {
    if(form.prompt){
      alert(prompt);
      // try {
      //   setGeneratingImg(true);
      //   //passing all of data to backend to get expected response (ai generated image)
      //   const response = await fetch('http://localhost:8000/api/v1/dalle',{
      //     method: 'POST', 
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({prompt: form.prompt}),
      //   })

      //   //to parse the data to be able to see the image
      //   const data = await response.json();

      //   //after getting response, setting it to the state. Separating photo from other data
      //   setForm({...form, photo: `data.image/jpeg;base64}, ${data.photo}`})

      // } catch (error) {
      //   alert(error); 
      // } finally {
      //   setGeneratingImg(false);
      // }
    } else {
      alert('Please enter a prompt');
    }
  }

  //handleSubmmit arrow function for handling form's button
  const handleSubmit = () => {

  }  

  //handleChange with evene e as a parameneter
  //spread the entire form and get the required value
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})   
  }

  //for handling SurpriseMe constant prompts
  //handling random prompt coming from the form.prompt, updating generation of new prompt everytime into prompt 
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt:randomPrompt})
  } 
  

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
          Create
        </h1>
        <p className='mt-2 text-[#666e75] text-[10px] max-w [5000px]'>
           Create imaginative and visually stunning images through DALL-E AI and share with Community.
        </p>
      </div>
      </div>

      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField
            LableName="Your name"
            type="text"
            name="name"
            placeholder="Lionel Messi"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            LableName="Prompt"
            type="text"
            name="prompt"
            placeholder="an armchair in the shape of an avocado"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe
          />

          <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
              {form.photo ?(
                <img 
                src="form.photo" 
                alt="form.prompt" 
                className='w-full h-full object-contain'
                />
              ): (
                <img 
                src={preview} 
                alt="preview" 
                className='2-9/12 h-9/12 object-contain opacity-40'
                />
              )}

              {generatingImg && (
                <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                  <Loader />
                </div>
              )}
          </div>

        </div>

        <div className='mt-5 flex gap-5'>
            <button
              type='button'
              onClick={generateImage}
              className='text-white bg-green-700 font-medium rounded-md text-sm sm:w-auto px-5 py-2.5 w-full text-center'
            >
              {generatingImg ? 'Generating...' : 'Generate'}
            </button>
        </div>

        <div className='mt-10'>
          <p className='mt-10 text-[#666e75] text-[14px]'>
            Once you have created the image you want, you can share it with the community.       
          </p>
          <button
           type='submit'
           className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
          >
            {loading ? 'Sharing...' : 'Share with the community'}
          </button>
        </div>
      </form>

    </section>
  )
}

export default CreatePost