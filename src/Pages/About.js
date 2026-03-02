import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './About.css';
import logo from '../Assets/Logo_falcon_beat13e.png';
import { Helmet } from 'react-helmet-async';

function About() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const whatsappNumber = '+31685533124';
    const navigate = useNavigate();

    const SocialIcons = () => (
        <div className="social-icons">
            <a href="https://open.spotify.com/artist/YOUR_SPOTIFY_ID" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-spotify"></i>
            </a>
            <a href="https://youtube.com/@YOUR_CHANNEL" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-youtube"></i>
            </a>
            <a href="https://instagram.com/YOUR_INSTAGRAM" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://tiktok.com/@YOUR_TIKTOK" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="fab fa-tiktok"></i>
            </a>
        </div>
    );

    return (

        <>
            <Helmet>
                <title>About FalconXXL – Professional Music Producer</title>
                <meta name="description" content="FalconXXL is a professional music producer behind Falcon Beats — a platform built for artists worldwide seeking quality instrumentals at an affordable price." />
                <link rel="canonical" href="https://www.falconbeat.nl/About" />
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
                        <div className="navbar-logo">
                            <div className="navbar-logo">
                                <NavLink to="/"
                                         className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}
                                >
                                    <img src={logo} alt="FalconBeat" className="logo-falcon-NavMenu"/>
                                </NavLink>
                            </div>
                        </div>
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
                        {/*<NavLink style={{color: "#f3bb2f"}} to="/About" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>About</NavLink>*/}
                        <NavLink to="/Collab" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Collab</NavLink>
                        <NavLink to="/Contact" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Contact</NavLink>
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
                        <NavLink to="/Contact" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>

                        <a
                            href="https://www.falconxxl.com"
                            target="_blank"
                            rel="noopener noreferrer"
                           className="mobile-menu-link mobile-menu-link-special"
                           // onClick={() => setMobileMenuOpen(false)}
                        >
                            FalconXXL
                        </a>
                    </div>
                </div>
            </nav>

            {/*<ModalLicense/>*/}

        </div>

        </>
    );
}

export default About;
