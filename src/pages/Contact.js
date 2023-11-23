import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

function Contact() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    async function submit(e) {
        e.preventDefault();
        const templateParams = {
            to_email: 'hadighandour3@gmail.com',
            from_name: e.target.from_name.value,
            from_email: e.target.from_email.value,
            message: e.target.message.value,
          };
      
          emailjs.send(
            'service_ayyl51h',
            'template_3x0e21d',
            templateParams, 
            'IptLCqLDRbLkd0Ij5'
          )
            .then((response) => {
              console.log('Email sent:', response);
              alert("Email sent sucessfully")
              // Handle success or show a success message
              setUsername('');
              setEmail('');
              setMessage('');
            })
            .catch((error) => {
              console.error('Error sending email:', error);
              alert("Error sending email.")
              // Handle error or display an error message
            });
        }
    return (
        <section>
        <div class='container1'>
            <form onSubmit={submit}>
                <h3>GET IN TOUCH</h3>
                <input type='text' name='from_name' placeholder='User name' value={username} onChange={(e) => setUsername(e.target.value)} required></input>
                <input type='text' name='from_email' placeholder='Email Adresse' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                <textarea name='message' rows='4' placeholder="How can we help you?" value={message} onChange={(e) => setMessage(e.target.value)}required></textarea>
                <button className="btn" type='submit'>Send Message</button>
            </form>
        </div>
        </section>
    );
}

export default Contact;