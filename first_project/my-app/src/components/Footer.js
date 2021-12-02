import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button' 
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subsription-heading">
                    Join our newsletter to get craziest update
                    about the latest technology and also products
                    on our site.
                </p> 
                <p className="footer subscription-text">
                    if you dont like the service please provide feedback and 
                    unsubscribe anytime.
                </p> 
                <div className="input-areas">
                    <form> 
                        <input type="email" name="email"
                        placeholder="Your eamil" className="footer-input" />
                        <Button buttonStyle="btn--outline">
                            JOIN FOR FREE
                        </Button>
                    </form>
                </div>
            </section> 
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>
                           About Us 
                        </h2>  
                        <h3>
                        <Link to="/sign-up">How it works</Link>
                        </h3> 
                        <h3>
                        <Link to="/">Testimonials</Link>
                        </h3> 
                        <h3>
                        <Link to="/">Careers</Link>
                        </h3>
                        <h3>
                        <Link to="/">Terms of Services</Link>
                        </h3> 
                    </div>
                    <div className="footer-link-items">
                        <h2>
                         Our team
                        </h2>  
                        <p>
                            Anshuman Goswami
                        </p>
                        <p>
                             Isha Choudhary
                        </p> 
                    </div>
                    <div className="footer-link-items">
                        <h2>
                         Contact Us
                        </h2>  
                        <p>
                           we can paste our details here 
                           according how the customer can contact us 
                        </p>
                    </div>
                </div>
            </div> 
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            A.I Stores
                        </Link>
                    </div> 
                    <small className="website-rights">
                        A.I Stores © 2021
                    </small> 
                    <div className="social-icons">
                        <Link className="social-icon-link facebook mx-2"
                         to="/"
                         target="_blank"
                         aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"/>
                        </Link>

                        <Link className="social-icon-link instagram mx-2"
                         to="/"
                         target="_blank"
                         aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"/>
                        </Link>
                        <Link className="social-icon-link twitter mb-2"
                         to="/"
                         target="_blank"
                         aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"/>
                        </Link> 

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
