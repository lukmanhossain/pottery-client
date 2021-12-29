import emailjs from "emailjs-com";
import React from 'react';

export default function ContactForm() {

     function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_uh89pp9', 'template_4tewnlk', e.target,'user_WMqQQZ1MaZ7dIYmj3TGnB')
        .then((result) => {
            console.log(result.text);
            window.alert("Thanks for your e-mail.I will contact you as soon as possible");
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div className="section">
            <div className="container">
            <h2 className="text-center text-title mt-4 mb-2 py-1">Contact With Us</h2>
            <form onSubmit={sendEmail}>
                    <div className="row pt-3 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-1 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-1 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="Subject"/>
                        </div>
                        <div className="col-8 form-group pt-1 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-2 mx-auto">
                            <input type="submit" className="btn btn-secondary" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}