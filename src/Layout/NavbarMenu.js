import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './NavbarMenu.css';
import logo from '../Assets/Logo_falcon_beat13e.png';

function NavbarMenu() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const whatsappNumber = '+31685533124';
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
                        <img src={logo} alt="FalconBeat" className="logo-falcon-NavMenu" />
                    </div>

                    <div className="navbar-links desktop-only">
                        <NavLink to="/" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Beats</NavLink>
                        <NavLink to="/Commercial" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Commercial</NavLink>
                        <NavLink to="/Songs" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Songs</NavLink>
                        <NavLink to="/License" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>License</NavLink>
                        <NavLink to="/About" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>About</NavLink>
                        <NavLink to="/WorkWithUs" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Collab</NavLink>
                        <NavLink to="/Contact" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Contact</NavLink>
                    </div>

                    <SocialIcons />

                    <a
                        href={`https://wa.me/${whatsappNumber}?text=Hello`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-contact-btn desktop-only"
                    >
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                </div>

                <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-content">
                        <NavLink to="/" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Beats</NavLink>
                        <NavLink to="/Commercial" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Commercial</NavLink>
                        <NavLink to="/Songs" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Songs</NavLink>
                        <NavLink to="/License" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>License</NavLink>
                        <NavLink to="/About" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
                        <NavLink to="/Collab" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Collab</NavLink>
                        <NavLink to="/Faq" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>FAQ</NavLink>
                        <NavLink to="/Contact" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Contact us</NavLink>
                        <a href="#falconxxl" className="mobile-menu-link mobile-menu-link-special" onClick={() => setMobileMenuOpen(false)}>FalconXXL</a>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default NavbarMenu;
