import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './License.css';
import logo from '../Assets/Logo_falcon_beat13e.png';
import Footer from "../Layout/Footer";
import TabelLicense from "../Layout/TabelLicense";
import BannerLicense from "../Layout/BannerLicense";
import WhyUs from "../Layout/WhyUs";
import {Helmet} from "react-helmet-async";

function License() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const whatsappNumber = '+31685533124';
    const navigate = useNavigate();

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
                <title>Beat Licensing – Flexible Plans for Artists & Businesses | Falcon Beats</title>
                <meta name="description" content="Explore flexible licensing options for artists, content creators and businesses. From basic to exclusive rights — Falcon Beats offers affordable plans for every project." />
                <link rel="canonical" href="https://www.falconbeat.nl/License" />
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
                        <NavLink style={{color: "#f3bb2f"}} to="/License" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>License</NavLink>
                        {/*<NavLink to="/About" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>About</NavLink>*/}
                        <NavLink to="/Collab" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Collab</NavLink>
                        <NavLink to="/Contact" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>Contact</NavLink>
                        <a href="https://www.falconxxl.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="navbar-link active">FalconXXL</a>
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
                        <NavLink to="/Contact" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
                        <a href="https://www.falconxxl.com" className="mobile-menu-link mobile-menu-link-special" onClick={() => setMobileMenuOpen(false)}>FalconXXL</a>
                    </div>
                </div>
            </nav>

            {/*---------------BannerLicense--------------------------*/}

            <div>
                <BannerLicense/>

            </div>

            {/*---------------Container-License--------------------------*/}

            <div className='Container-License'>
                {/* Header / Introduction Section */}
                <section className="license-intro-section"
                // style={{borderBottom:"1px solid white"}}
                >
                    <h1 className="license-main-title">Falcon Beats Licensing</h1>

                    <p className="license-intro-text">
                        We offer three categories of instrumentals and music products tailored to suit different creators and businesses.
                        You can find the License Terms & Agreements for each category below.
                    </p>

                    <div className="license-categories-grid">
                        <div className="category-card">
                            <div className="category-icon">
                                <i className="fa-solid fa-microphone-lines"></i>
                            </div>
                            <h3 className="category-title">Beats for Artists</h3>
                            <p className="category-description">For singers, rappers, and musicians</p>
                        </div>

                        <div className="category-card">
                            <div className="category-icon">
                            <i className="fa-solid fa-briefcase"></i>
                        </div>

                        <h3 className="category-title">Beats for Entrepreneurs</h3>
                            <p className="category-description">For businesses, ads, branding & content</p>
                        </div>

                        <div className="category-card">
                            <div className="category-icon">
                                <i className="fa-solid fa-music"></i>
                            </div>
                            <h3 className="category-title">Finished Songs</h3>
                            <p className="category-description">Ready-to-use complete tracks</p>
                        </div>
                    </div>

                    <div className="whatsapp-note">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=Hello, I have a question about licensing`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-link"
                        >
                            <i className="fa-brands fa-whatsapp"  style={{ fontSize: '30px'}}></i> Contact us for any questions
                        </a>
                    </div>

                    <TabelLicense/>

                </section>

                {/* Instrumentals for Entrepreneurs Section */}
                <section className="license-section">
                    <h2 className="section-title"
                        style={{fontSize:"42px", marginTop:"60px"}}
                    >Instrumentals for Entrepreneurs</h2>
                    <p className="section-description">
                        These licenses are made for businesses, brands, content creators, and marketing projects.
                    </p>

                    <WhyUs/>

                    <div className="license-cards-grid">
                        <div className="license-card">
                            {/*<div className="license-bullet yellow"></div>*/}
                            <h3 className="license-card-title">Standard Business License</h3>
                            <ul className="license-features">
                                <li>Social media & online content</li>
                                <li>Limited audience reach</li>
                                <li>Perfect for small businesses</li>
                                <li>Non-exclusive rights</li>
                            </ul>
                        </div>

                        <div className="license-card">
                            {/*<div className="license-bullet orange"></div>*/}
                            <h3 className="license-card-title">Professional Business License</h3>
                            <ul className="license-features">
                                <li>Ads & promotional videos</li>
                                <li>Higher audience reach allowed</li>
                                <li>Website & company videos</li>
                                <li>Non-exclusive rights</li>
                            </ul>
                        </div>

                        <div className="license-card featured">
                            {/*<div className="license-bullet blue"></div>*/}
                            <h3 className="license-card-title">Corporate Unlimited License</h3>
                            <ul className="license-features">
                                <li>Unlimited commercial use</li>
                                <li>Ads, campaigns, events & branding</li>
                                <li>Priority support included</li>
                                <li>Non-exclusive rights</li>
                            </ul>
                        </div>
                    </div>

                    <div className="whatsapp-note">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=Hello, I need custom commercial rights`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-link"
                        >
                            <i className="fa-brands fa-whatsapp" style={{ fontSize: '30px'}}></i> Need custom commercial rights? Contact us
                        </a>
                    </div>
                </section>

                {/* Finished Songs Section */}
                <section className="license-section">
                    <h2 className="section-title"
                        style={{fontSize:"42px", marginTop:"60px"}}
                    >Finished Songs</h2>
                    <p className="section-description">
                        Fully completed songs ready for commercial use, branding, events, media & entertainment projects.
                    </p>

                    <div className="finished-songs-content">
                        <div className="info-box">
                            <i className="fa-solid fa-info-circle info-icon" style={{ fontSize: '30px'}}></i>
                            <p className="info-text">
                                Licensing terms depend on project type and distribution scale. Each finished song comes with professional production, mixing, and mastering, ready for immediate use in your projects.
                            </p>
                        </div>
                    </div>

                    <div className="whatsapp-note">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=Hello, I'm interested in finished songs licensing`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-link"
                            style={{color:"#3d8ef9", border:"1px solid #3d8ef9"}}
                        >
                            <i className="fa-brands fa-whatsapp" style={{ fontSize: '30px'}}></i> Contact us for licensing details
                        </a>
                    </div>
                </section>

                {/* Important / Legal Note Section */}
                <section className="license-section important-section">
                    <h2 className="section-title" style={{color:"#ff4e4e"}}>Important</h2>
                    <div className="legal-notice">
                        <p className="legal-text">
                            All licenses are subject to Falcon Beats Terms & Conditions. Unauthorized use, resale, or redistribution of beats without a valid license is strictly prohibited.
                        </p>
                        <div className="whatsapp-note" style={{marginTop: '20px'}}>
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=Hello, I need information about terms and conditions`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-link"
                                style={{color:"#ff4e4e", border:"1px solid #ff4e4e"}}
                            >
                                <i className="fa-brands fa-whatsapp" style={{ fontSize: '30px'}}></i>

                                Contact us for full terms
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <Footer/>

        </div>

      </>
    );
}

export default License;