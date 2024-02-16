import React, { useState, useRef } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setErrMsg("");
    setSuccessMsg("");

    if (!email.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)) {
      setErrMsg("Provide a valid Email!");
      return;
    }

    emailjs.sendForm('service_2011pvf', 'template_rt36djf', form.current, 'F7I05nX-UIpaRAXHQ')
      .then(() => {
          console.log('SUCCESS!');
          setSuccessMsg(`Thank you ${username}, your message has been sent successfully!`);
          setUsername("");
          setPhoneNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
        }, (error) => {
          console.log('FAILED...', error.text);
          setErrMsg("Failed to send the message, please try again.");
        });
  };

  return (
    <section id="contact" className="w-full py-10 lg:py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Get in Contact With Me!" />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <ContactLeft />
          <div className="flex-1 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-6 lg:p-8">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
              {errMsg && <div className="text-red-500 text-center mb-4">{errMsg}</div>}
              {successMsg && <div className="text-green-500 text-center mb-4">{successMsg}</div>}
              <input name="from_name" value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="w-full p-3 rounded" placeholder="Your Name" />
              <input name="phone_number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" className="w-full p-3 rounded" placeholder="Your Phone Number" />
              <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full p-3 rounded" placeholder="Your Email" />
              <input name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} type="text" className="w-full p-3 rounded" placeholder="Subject" />
              <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="10" className="w-full p-3 rounded" placeholder="Your Message"></textarea>
              <button type="submit" className="w-full h-12 bg-[#141518] rounded text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
