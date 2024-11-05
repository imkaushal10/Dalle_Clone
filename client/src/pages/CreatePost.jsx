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
  const [genratingimg, Generatingimg] = useState(false); // used while contacting with api and waiting to get image
  const [loading, setLoading] = useState(false); //general loading

  //handleSubmmit arrow function for handling form's button
  const handleSubmit = () => {

  }  

  //handleChange with evene e as a parameneter
  const handleChange = (e) => {

  }

  // for handling SurpriseMe constant prompts
  const handleSurpriseMe = () => {

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
            label Name="Your name"
            type="text"
            name="name"
            placeholder="Lionel Messi"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            label Name="Prompt"
            type="text"
            name="prompt"
            placeholder="an armchair in the shape of an avocado"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe
          />

        </div>
      </form>

    </section>
  )
}

export default CreatePost