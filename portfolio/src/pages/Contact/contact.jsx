import React from "react";
import ContactForm from "../../components/Contact Form/contactForm"
import { Container } from "react-bootstrap"

function Contact() {

    return (
        <Container fluid className="contact">
            <ContactForm />
        </Container>
    )
}

export default Contact;