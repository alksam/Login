import React, { useState } from 'react';
import ContactStyles from '../styles/ContactStyles';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logik til at sende formularen her (f.eks. med fetch eller Axios)
        console.log('Formulardata:', formData);
        // Nulstil formularfelterne
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    }

    return (
        <>
            <ContactStyles />
            <div className="contactContainer">
                <h1>Kontakt os</h1>
                <form onSubmit={handleSubmit} className="contactForm">
                    <div className="formGroup">
                        <label>Navn:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label>Besked:</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    );
}

export default Contact;
