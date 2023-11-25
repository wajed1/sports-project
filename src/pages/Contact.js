import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const[valid,setValid]=useState(false);

    // Helper function to validate email format
    const validateEmail=()=> {
        if (email.trim() !== '' && email.includes('@') && email.split('@')[1].length > 0 && email.includes('.') && email.split('.')[1].length > 0) {
            setValid(true);
            return true;
          } else {
            return false;
          }
    }

    async function submit(e) {
        e.preventDefault();

        // Validation: Check if the email is in a valid format
        const isValidEmail = validateEmail(e.target.from_email.value);

        if (!isValidEmail) {
            alert("Please enter a valid email address.");
            return;
        }

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
            alert("Email sent successfully");
            // Handle success or show a success message
            setUsername('');
            setEmail('');
            setMessage('');
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            alert("Error sending email.");
            // Handle error or display an error message
        });
    }

    return (
        <section>
            <div className='container1'>
                <form onSubmit={submit}>
                    <h3>GET IN TOUCH</h3>
                    <input
                        className="input1"
                        type='text'
                        name='from_name'
                        placeholder='User name'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        className="input2"
                        type='text'
                        name='from_email'
                        placeholder='Email Adresse'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        className="input3"
                        name='message'
                        rows='4'
                        placeholder="How can we help you?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <button className="btn" type='submit'>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
