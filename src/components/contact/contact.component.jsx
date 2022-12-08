import './contact.styles.scss';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
    return (
        <div className="contact" id='contact'>
        <h2 className="bio__head">Contact</h2>
            <div className="container contact__container">
                <div className='contact__card'>
                    <div className='contact__cards'>
                        <EmailOutlinedIcon />
                        <h4 className='contact__head'>Email</h4>
                        <h5>ushiksmandi@gmail.com</h5>
                        <a href='#'>Send a message</a>
                    </div>
                    <div className='contact__cards'>
                        <WhatsAppIcon />
                        <h4 className='contact__head'>WhatsApp</h4>
                        <h5>+234 814 016 0850</h5>
                        <a href='#'>Send a message</a>
                    </div>
                </div>
                <form>
                    <div class="form__group">
                        <input type="text" className="form__input" placeholder="Your Name" id="name" required />
                        <label for="name" className="form__label">Your Name</label>
                    </div>

                    <div className="form__group">
                        <input type="email" className="form__input" placeholder="Your Email" id="email" required />
                        <label for="email" className="form__label">Your Email</label>
                    </div>

                    <div className="form__group">
                        <input type="text" className="form__input" placeholder="Your Message" id="message" required />
                        <label for="message" className="form__label">Your Message</label>
                    </div>

                    <div className="form__group">
                        <button className="btn btn--full contact-btn">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;