import { useState } from "react";
import Button from "./Button";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/85365cd0-a059-11ee-9dec-893a2542e245";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Form response was not ok");
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  if (submitted) {
    return (
      <div className='flex flex-col items-center justify-center text-center border border-gray-300 py-10 bg-gray-200 rounded'>
        <div className='text-3xl font-bold text-gray-800 mb-4'>Thank you!</div>
        <div className='text-lg text-gray-800 mb-8'>
          Your message has been successfully submitted.
          <br />
          I'll get back to you as soon as possible.
        </div>
      </div>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method='POST'
      className='flex flex-col md:w-[calc(100%-30%)] w-full mx-auto mt-10 border-gray-300 border p-4 rounded shadow-lg bg-gray-200'
    >
      <div className='hidden'>
        <input type='text' name='_gotcha' tabIndex='-1' autoComplete='off' />
      </div>
      <div className='mb-4 flex items-center gap-3'>
        <input
          type='text'
          placeholder='Your name'
          name='name'
          className='focus:outline-none focus:ring w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border-2 border-gray-300 rounded shadow outline-none transition duration-300 ease-in-out'
          required
        />

        <input
          type='email'
          placeholder='Your email'
          name='email'
          className='focus:outline-none focus:ring w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border-2 border-gray-300 rounded shadow outline-none transition duration-300 ease-in-out'
          required
        />
      </div>
      <div className='mb-4'>
        <input
          type='text'
          placeholder='Subject'
          name='subject'
          className='focus:outline-none focus:ring w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border-2 border-gray-300 rounded shadow outline-none transition duration-300 ease-in-out'
          required
        />
      </div>
      <div className='mb-4'>
        <textarea
          placeholder='Your message'
          name='message'
          className='focus:outline-none h-40 focus:ring w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border-2 border-gray-300 rounded shadow outline-none resize-none transition duration-300 ease-in-out'
          required
        />
      </div>
      <div className='flex justify-center'>
        <Button type='submit' text='Submit' />
      </div>
    </form>
  );
};

export default ContactForm;
