import Footer from "../components/Footer";
import { useState } from "react";
import pic from '../assets/imgs/contact.jpg';
import '../assets/css/contact.css';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';

function Contact() {
    const [person, setPerson] = useState({
        name: '',
        email: '',
        number: '',
        subject: '',
        msg: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        setPerson({ ...person, [name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          await doCreateUserWithEmailAndPassword(person.email, person.msg);
          alert('Message sent successfully!');
          setPerson({
              name: '',
              email: '',
              number: '',
              subject: '',
              msg: ''
          });
      } catch (error) {
          if (error.code === 'auth/email-already-in-use') {
              alert('The email address is already in use. Please use a different email.');
          } else {
              console.error('Error sending message:', error);
              alert('Error sending message. Please try again later.');
          }
      }
  };
  

    return (
        <div className="contact-container">
            <div className="first">
                <h2>Contact US</h2>
                <p>Have questions or ready to get started? We'd love to hear from you! Use the contact form below to send us a message, and we'll get back to you as soon as possible.</p>
            </div>

            <div className="secondd">
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name
                            <input
                                type='text'
                                name='name'
                                value={person.name}
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            Email
                            <input
                                type='email'
                                name='email'
                                value={person.email}
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            Phone number (optional)
                            <input
                                type='text'
                                name='number'
                                value={person.number}
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            Subject (optional)
                            <input
                                type='text'
                                name='subject'
                                value={person.subject}
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            Message
                            <textarea
                                id="message"
                                name="msg"
                                rows="4"
                                value={person.msg}
                                onChange={handleChange}
                                placeholder="Enter your message">
                            </textarea>
                        </label>
                        <button type='submit'>send</button>
                    </form>
                </div>

                <div className="contact-content">
                    <div className="contact-img">
                        <img src={pic} alt="people discussing" />
                    </div>
                    <div className="contact-box">
                        <p>Give us a call +123 456 789</p>
                        <p>Visit us at Kedamay weyane, first floor</p>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Contact;
