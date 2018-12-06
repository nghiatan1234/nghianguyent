import React, { Component } from 'react';
import './Contact.css';
import MapContainer from './MapContainer';

class Contact extends Component {

    render() {
        return (
            <div>
            <MapContainer/>
                <div className="container-contact100">
                    <div className="wrap-contact100">
                        <form className="contact100-form validate-form">
                            <span className="contact100-form-title">
                                Contact Us
				        </span>

                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Name</span>
                                <input className="input100" type="text" name="name" placeholder="Name..." />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <span className="label-input100">Email</span>
                                <input className="input100" type="text" name="email" placeholder="Email addess..." />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100">
                                <span className="label-input100">Phone</span>
                                <input className="input100" type="text" name="phone" placeholder="Phone Number..." />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Message is required">
                                <span className="label-input100">Message</span>
                                <textarea className="input100" name="message" placeholder="Questions/Comments..."></textarea>
                                <span className="focus-input100"></span>
                            </div>

                            <div className="container-contact100-form-btn">
                                <div className="wrap-contact100-form-btn">
                                    <div className="contact100-form-bgbtn"></div>
                                    <button className="contact100-form-btn">
                                        Send
						            </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;