import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="padding-standard">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 margin-top-sm">
                                <h5>About Us</h5>
                                <ul>
                                    <li>
                                        <a>Our Story</a></li>
                                    <li>
                                        <a>Join Us</a>
                                    </li>
                                    <li>
                                        <a>Blog</a>
                                    </li>
                                    <li>
                                        <a>Terms of Service</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 margin-top-sm">
                                <h5>Need help?</h5>
                                <ul>
                                    <li>
                                        <a >FAQ</a></li>
                                    <li>
                                        <a>
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a>Return </a>
                                    </li>
                                    <li>
                                        <a>Product Registration</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 margin-top-sm">
                                <h5>Support</h5>
                                <ul>
                                    <li>
                                        <a>Customer Service</a></li>
                                    <li>
                                        <a>My Account</a>
                                    </li>
                                    <li>
                                        <a>Contact US</a>
                                    </li>
                                    <li>
                                        <a>Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-8 col-sm-6 col-xs-12 margin-top-sm">
                                <h5>Social</h5>
                                <div className="footer-social">
                                    <ul className="footer-social-list d-flex flex-row align-items-start justify-content-start">
                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="name">©2018 Design by nghianguyent</div>
            </footer>
        );
    }
}

export default Footer;
