import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  return (
    <div>
      <div className='py-24 h-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 section-container bg-first bg-cover bg-center w-full px-4 sm:px-8 md:px-12 lg:px-24'>
        <div className='md:w-1/2'>
            <h1 className='lg:text-5xl text-3xl font-bold md:leading-snug leading-snug font-lora pt-0 md:pt-18'>
              Contact Us
            </h1>
        </div>
        <div className='md:w-1/2'>
        </div>
      </div>
      <div className="section-container px-4 sm:px-20 md:px-12 lg:px-24">
        <h1 className='title text-center text-black pt-10'>Contact Us</h1>
        <p className='para'>We're here to help! Whether you have questions, need support, or just want to say hello, we'd love to hear from you. Reach out to us through the form below, or connect with us via email or phone. Our team is dedicated to providing prompt and friendly assistance. Let’s get in touch!</p>
        <div className='py-10 w-full x-0 flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='md:w-1/2 sm:w-3/4 space-y-7 lg:px-24 lg:py-10 sm:py-20 bg-green text-white'>
              <h4 className='font-lora font-bold text-xl'>Call Us</h4>
              <p>
                  <FontAwesomeIcon icon={faPhone} className='mr-3'/>
                  +123 456 7890
              </p>
              <h4 className='font-lora font-bold text-xl'>Email Us</h4>
              <p>
                  <FontAwesomeIcon icon={faEnvelope} className='mr-3'/>
                  info@foody.com
              </p>
              <h4 className='font-lora font-bold text-xl'>Office Address</h4>
              <p>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className='mr-3'/>
                  123 Street, New York, USA
              </p>
              <h4 className='font-lora font-bold text-xl'>Follow Us</h4>
              <div className='flex space-x-3'>
                <FontAwesomeIcon icon={faYoutube} size='xl' className='border-1 border-white border p-2 rounded-full'/>
                <FontAwesomeIcon icon={faInstagram} size='xl' className='border-1 border-white border p-2 rounded-full'/>
                <FontAwesomeIcon icon={faLinkedin} size='xl' className='border-1 border-white border p-2 rounded-full'/>
                <FontAwesomeIcon icon={faFacebook} size='xl' className='border-1 border-white border p-2 rounded-full'/>
              </div>
          </div>
          <div className='md:w-1/2 ml-4'>
            <div className=' pb-10 w-full'>
              <input type="text" placeholder="Your Name" className="input w-75 max-w-xs bg-white border-1 border border-gray p-2 mb-10" />
              <input type="text" placeholder="Your Email" className="input w-full max-w-xs bg-white border-1 border border-gray p-2" />
            </div>
            <input type="text" placeholder="Subject" className="input w-full max-w-xs bg-white border-1 border border-gray mb-10 p-2" /><br />
            <textarea className="textarea border border-1 border-gray bg-white h-32 w-full p-2" placeholder="Your Message"></textarea>
            <button className='my-10 text-white bg-green p-3 px-8 rounded-full'>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
