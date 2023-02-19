import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'
import {SlEnvolopeLetter} from 'react-icons/Sl'

const Footer = () => {
    return(
        <>
            <div className='footer-container'>
                <div>
                    <form className='subscribe-form'>
                        <div>
                            <SlEnvolopeLetter className='subscribe-icon' />
                            <p>Sign up for updates</p>
                        </div>
                        <div>
                            <input type='text' placeholder='Your Email address' className='input-search subscribe-search' ></input>
                            <button className='search-button' type='submit'>Subscribe</button>
                        </div>
        <div>Roobini</div>
                    </form>
                </div>
                <div className='footer-grid'>
                    <div>
                        <h4>Contact Us</h4>
                        <span>No.2, 2nd cross street</span>
                        <span>Bhavani nagar, Katpadi</span>
                        <span>Vellore - 632007,TN.</span>
                        <p>+91 9487226859</p>
                        <span>viknesh.mv@gmail.com</span>
                    </div>
                    <div>
                        <h4>Information</h4>
                        <Link>Private Policy</Link>
                        <Link>Refund Policy</Link>
                        <Link>Shipping Policy</Link>
                        <Link>Terms of Service</Link>
                        <Link>Blogs</Link>
                    </div>
                    <div>
                        <h4>Account</h4>
                        <Link>Search</Link>
                        <Link>About Us</Link>
                        <Link>faq</Link>
                        <Link>Contact</Link>
                        <Link>Size Chart</Link>
                    </div>
                    <div>
                        <h4>Quick Links</h4>
                        <Link>Accesories</Link>
                        <Link>Laptops</Link>
                        <Link>Headphones</Link>
                        <Link>Smart Watches</Link>
                        <Link>Tablets</Link>
                    </div>
                </div>
                <p>&copy; 2022: Powered by React Js Developer</p>
            </div>
        </>
    )
}

export default Footer;
