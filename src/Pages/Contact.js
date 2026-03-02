import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './Contact.css';
import logo from '../Assets/Logo_falcon_beat13e.png';
import Footer from "../Layout/Footer";
import ContactFalcon from "../Layout/ContactFalcon";
import {Helmet} from "react-helmet-async";

function Contact() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const whatsappNumber = '+31685533124';

    const SocialIcons = () => (
        <div className="social-icons">

            {/* Spotify */}
            <a
                href="https://open.spotify.com/user/31zx5mzrgc35qi44xl4weluuedqi"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
            >
                <i className="fab fa-spotify"></i>
            </a>

            {/* YouTube */}
            <a
                href="https://www.youtube.com/@FalconXXL-Beat"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
            >
                <i className="fab fa-youtube"></i>
            </a>

            {/* Instagram */}
            <a
                href="https://www.instagram.com/falconbeat2.0"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
            >
                <i className="fab fa-instagram"></i>
            </a>

            {/* TikTok */}
            <a
                href="https://www.tiktok.com/@whogotflow1"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
            >
                <i className="fab fa-tiktok"></i>
            </a>

        </div>
    );

    return (

        <>
            <Helmet>
                <title>Contact Falcon Beats – Get Your Beat Today</title>
                <meta name="description" content="Have a question or want to purchase a beat? Contact Falcon Beats via WhatsApp or our contact form. We're here to help artists get the music they need." />
                <link rel="canonical" href="https://www.falconbeat.nl/Contact" />
            </Helmet>

        <div className="App">

            {mobileMenuOpen && (
                <div
                    className="mobile-menu-overlay"
                    onClick={() => setMobileMenuOpen(false)}
                ></div>
            )}

            <nav className="navbar">
                <div className="navbar-container">
                    <button
                        className="mobile-hamburger"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Menu"
                    >
                        <span className={mobileMenuOpen ? 'active' : ''}></span>
                        <span className={mobileMenuOpen ? 'active' : ''}></span>
                        <span className={mobileMenuOpen ? 'active' : ''}></span>
                    </button>

                    <div className="navbar-logo">
                        <NavLink to="/"
                                 className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}
                        >
                            <img src={logo} alt="FalconBeat" className="logo-falcon-NavMenu"/>
                        </NavLink>
                    </div>

                    <div className="navbar-links desktop-only">
                        <NavLink to="/" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Beats</NavLink>
                        <NavLink to="/Commercial" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Commercial</NavLink>
                        <NavLink to="/Songs" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Songs</NavLink>
                        <NavLink
                            to="/New"
                            className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}
                        >
                            New*
                        </NavLink>
                        <NavLink to="/License" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>License</NavLink>
                        {/*<NavLink to="/About" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>About</NavLink>*/}
                        <NavLink to="/Collab" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Collab</NavLink>

                        <NavLink style={{color: "#f3bb2f"}}
                                 to="/Contact" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Contact</NavLink>

                        <a href="https://www.falconxxl.com" className="navbar-link active">FalconXXL</a>
                    </div>

                    <SocialIcons />

                    <a
                        href={`https://wa.me/${whatsappNumber}?text=Hello`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-contact-btn desktop-only"
                        style={{padding:"2px 9px", fontSize:"23px"}}
                    >
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>

                    {/* ======= BOUTON ALL BEATS MOBILE ======= */}
                    <button className="mobile-all-beats-btn" onClick={() => navigate('/')}>
                        All beats
                    </button>
                </div>

                <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-content">
                        <NavLink to="/" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Beats</NavLink>
                        <NavLink to="/Commercial" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Commercial</NavLink>
                        <NavLink to="/Songs" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Songs</NavLink>
                        <NavLink to="/New" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>New*</NavLink>
                        <NavLink to="/License" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>License</NavLink>
                        {/*<NavLink to="/About" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>About</NavLink>*/}
                        <NavLink to="/Collab" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Collab</NavLink>
                        {/*<NavLink to="/Faq" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>FAQ</NavLink>*/}
                        <NavLink to='/Contact' className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
                        <a href="https://www.falconxxl.com" className="mobile-menu-link mobile-menu-link-special" onClick={() => setMobileMenuOpen(false)}>FalconXXL</a>
                    </div>
                </div>
            </nav>

            <ContactFalcon/>

            <Footer/>
        </div>
      </>
    );
}

export default Contact;
