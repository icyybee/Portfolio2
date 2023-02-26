import './contact.styles.scss';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_40nnisb', 
            'template_6ehxn48', 
            form.current,
            'tJdqSNtrDqosmJV6Z'
        )
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                setTimeout(() => {
                    alert('Thanks for Contacting!');
                }, 100);
                console.log('Message sent');
                
            }, (error) => {
                console.log(error.text);
            }
        );
    };

    return (
        <div className="contact" id='contact'>
            <h2 className="bio__head">Contact</h2>
            <div className="container contact__container">
                <div className='contact__card'>
                    <div className='contact__cards'>
                        <EmailOutlinedIcon />
                        <h4 className='contact__head'>Email</h4>
                        <h5>ushiksmandi@gmail.com</h5>
                        <a href='mailto:ushiksmandi@gmail.com'>Send a message</a>
                    </div>
                    <div className='contact__cards'>
                        <WhatsAppIcon />
                        <h4 className='contact__head'>WhatsApp</h4>
                        <h5>+234 814 016 0850</h5>
                        <a href='https://wa.me/+2348140160850'>Send a message</a>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form__group">
                        <input 
                            type="text" 
                            className="form__input" 
                            placeholder="Your Name" 
                            name="user_name"
                            required 
                        />
                        <label 
                            htmlFor="name" 
                            name='name' 
                            className="form__label"
                        >
                            Your Name
                        </label>
                    </div>

                    <div className="form__group">
                        <input 
                            type="email"  
                            className="form__input" 
                            placeholder="Your Email" 
                            name="user_email"
                            required 
                        />
                        <label 
                            htmlFor="email" 
                            name='email' 
                            className="form__label"
                        >
                            Your Email
                        </label>
                    </div>

                    <div className="form__group">
                        <input 
                            type="text" 
                            name='message' 
                            className="form__input" 
                            placeholder="Your Message" 
                            required 
                        />
                        <label 
                            htmlFor="message" 
                            className="form__label"
                        >
                            Your Message
                        </label>
                    </div>

                    <div className="form__group form__last">
                        <button type='submit' className="btn btn--full contact-btn" value="Send Message">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;