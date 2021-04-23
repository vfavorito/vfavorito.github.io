import React from "react";
import { Row, Col } from "react-bootstrap"
import "./contactForm.css"

function ContactForm() {

    return(
        <Row>
                <Col className="contactForm" sm={6}>
                    <h1 className="formHead">Reach out to me</h1>
                    <form action="https://getform.io/f/528fca86-57bc-44f3-a37f-7903a150d04b" method="POST">
                        <div className="form-group">
                            <label htmlFor="nameLine" className="textStyle">Name:</label>
                            <input type="text" className="form-control" id="nameLine" placeholder="First Name Last Name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailLine" className="textStyle">Email:</label>
                            <input type="email" className="form-control" id="emailLine" placeholder="Email Address" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="messageBox" className="textStyle">What's This About?</label>
                            <textarea className="form-control" id="messageBox" placeholder="Message" rows="3" name="message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary submitBtn">Send</button>
                    </form>
                </Col>
            </Row>
    )
}

export default ContactForm;;