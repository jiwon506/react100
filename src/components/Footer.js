import React from 'react';
import { Link } from 'react-router-dom';
// import '../scss/style.scss';

function Footer() {
    return(
        <footer id="footer">
            <div className="container">
                <div className="footer">
                    <div>
                        <p>let’s creat something new</p>
                        <h3>LET'S GET IN<br /> TOUCH</h3>
                        <Link to="/contact" className="contact">Contact Me</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;