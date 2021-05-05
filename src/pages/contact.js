
import React from 'react';
import Seo from '../components/Seo';
import ContactForm from '../components/ContactForm';

const ContactPage = () => (
  <React.Fragment>
    <Seo title="Contact" />
    <h1>Get in Touch !</h1>
    <ContactForm />
  </React.Fragment>
);

export default ContactPage;