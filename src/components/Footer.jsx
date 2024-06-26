import logo from '../assets/imgs/logoYellow.png';
import { MdCall } from "react-icons/md";
import '../assets/css/footer.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { doSubscribeToNewsletter } from '../firebase/auth'; // Assuming you've added this function to your auth.js file

function Footer() {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await doSubscribeToNewsletter(email);
            alert('Thank you for subscribing!');
            setEmail('');
        } catch (error) {
            console.error('Error subscribing:', error);
            alert('Error subscribing. Please try again later.');
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className='footer-container'>
            <div className='fir'>
                <div id='footer-logo'>
                    <img src={logo} alt="Logo" />
                </div>

                <div className='footer-links' id='company'>
                    <h3>Company</h3>
                    <Link to='/about'>About us</Link>
                    <Link to='/contact'>contact us</Link>
                    <Link to='/services'>services</Link>
                    <Link to='/'>privacy terms</Link>
                </div>

                <div className='footer-links' id='social-links'>
                    <h3>Social Links</h3>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>LinkedIn</p>
                </div>

                <div className='subscribe-box'>
                    <h3>Get the Latest News</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder='Enter email'
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>

            <div className='second'>
                <p> © {currentYear} HomeHive. All rights reserved.</p>
                <a href="tel:+123456789" className="contact-info">
                    <MdCall />
                    <span>+123 456 789</span>
                </a>
                <p>Located at: Kedamay weyane</p>
                <p>Email: homehive@gmail.com</p>
            </div>

            <div className='third'>
            </div>
        </div>
    );
}

export default Footer;
