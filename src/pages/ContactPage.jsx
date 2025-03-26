import React, { useState } from 'react'
import NavbarProducts from '../components/NavbarProducts';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Swal from 'sweetalert2'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // email
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bbdc3a09-a48c-4ea7-9fa4-325ab19156a4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Sent!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <div className='bg-[#28282A] h-screen flex flex-col items-center'>
        <NavbarProducts />
        <p className='text-[#504f52] mt-20 text-xl'>TechRaft by</p>
        <div className='flex flex-wrap gap-7 text-center items-center justify-center'>
          <h1 className='text-[#525154] text-center font-bold text-[3rem] sm:text-[8rem]'>RISHIKESH</h1>
          <h1 className='text-[#525154] text-center font-bold text-[3rem] sm:text-[8rem]'>MANE</h1>
        </div>

        <div className='absolute bottom-28 border border-gray-400 font-semibold p-8 rounded-full w-3/4 mt-20'>
          <p className='text-white text-[3vw] text-center'>LET'S TALK</p>
        </div>
        <div className='absolute bottom-2 flex items-center flex-col'>
          <p className='text-white'>Scroll</p>
          <p className='text-white text-2xl'>&darr;</p>
        </div>
      </div>

      <div className='bottomDiv relative bg-[#19191a] h-screen flex flex-col items-center justify-center'>
        <form onSubmit={handleSubmit} className='contactForm flex flex-col  justify-center gap-10'>
          <h1 className='text-4xl font-bold text-white text-center'>CONTACT ME</h1>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
          <button type="submit">Send Email</button>
        </form>

        <footer 
          className='absolute bottom-0 z-20 text-[#b2b2b6] w-full flex flex-col sm:flex-row gap-2 sm:gap-0 items-center justify-between px-20 py-5'
        >
          <div className='flex gap-6 cursor-pointer'>
            <a 
              href="https://www.linkedin.com/in/your-linkedin-profile" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='hover:text-white sm:block hidden'
            >
              Linkedin
            </a>
            <a 
              href="https://github.com/your-github-profile" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='hover:text-white sm:block hidden'
            >
              Github
            </a>
          </div>

          <div>
            <p>rishimane03@gmail.com</p>
          </div>

          <div className='flex items-center gap-5'>
            <a 
              href="https://github.com/RishiMane03" 
              target="_blank" 
            >
              <FaGithub size={30} /> 
            </a>
            <a 
              href="www.linkedin.com/in/rishikesh-mane-a295082a3" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} /> 
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default ContactPage;
