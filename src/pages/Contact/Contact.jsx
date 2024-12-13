import React from 'react';
import './Contact.css';

import { motion } from "framer-motion";

function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
        >
            <div className="contact-container">
                <div className="contact-info">
                    <div className="contact-card">
                        <h3>📧 Email Our Support Team</h3>
                        <p>Our expert Customer Advocacy team typically responds to emails within one business day.</p>

                        <a className='email-link' href="mailto:rrhh@daromainnovations.com">
                            Email us
                        </a>


                    </div>
                    <div className="contact-card">
                        <h3>📍 Where to find us</h3>
                        <p>Alicante, Spain</p>
                    </div>
                    <div className="contact-card">
                        <h3>📞 Call us </h3>
                        <p>+123 456 7890</p>
                    </div>
                </div>
                <div className="contact-form">
                    <h1>Contact</h1>
                    <p>
                        We're here to help
                    </p>

                    <form>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Type your name or company name"
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Type your email"
                        />
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Type your message"
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>

        </motion.div>
    );
}

export default Contact;