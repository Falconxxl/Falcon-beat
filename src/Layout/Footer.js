import './Footer.css';
import logo_footer from '../Assets/Logo_falcon_beat13e.png';
import {NavLink} from "react-router-dom";

function Footer() {


    return (
        <div className="Container-Footer">
            <div className="Container-Footer-content1">

                <div className="Container-Footer-logoSlogan">
                    <img src={logo_footer} alt="flaconXXL-logo" className="logo-falcon-Footer"/>
                    <h1>Falcon Beats, the sound of your next level</h1>

                </div >

                <div className="Container-Footer-links">

                    <div className="Container-Footer-links-details">
                        <h className="Footer-title">Pages</h>
                        <NavLink to='/' className="Footer-links">Beats</NavLink>
                        <NavLink to='/Commercial' className="Footer-links">Commercial</NavLink>
                        <NavLink to='/Songs' className="Footer-links">Songs</NavLink>
                        <NavLink to='/New' className="Footer-links">New*</NavLink>
                        <NavLink to='/License' className="Footer-links">License</NavLink>
                        {/*<NavLink to='/About' className="Footer-links">About</NavLink>*/}
                        <NavLink to='/Collab' className="Footer-links">Collab</NavLink>
                        {/*<NavLink to='/Contact' className="Footer-links">Contact</NavLink>*/}
                    </div>

                    <div className="Container-Footer-links-details">
                        <h className="Footer-title">Links</h>
                        <a
                            href="https://www.falconxxl.com"
                            target="_blank"
                            style={{color:"#f3bb2f"}}
                            rel="noopener noreferrer"
                            className="Footer-links"
                        >
                            FalconXXL
                        </a>
                    </div>

                    <div className="Container-Footer-links-details-contact">
                        <h className="Footer-title">Contacts</h>
                        <p className="Footer-title-details">Tel:</p>
                        <p className="Footer-title-details-small">+31685533124 (Netherlands)</p>
                        <p className="Footer-title-details">Email:</p>
                        <p className="Footer-title-details-small">falconxxl.mail@gmail.com</p>
                    </div>

                </div>

                <div className="Container-Footer-SocialMedia">
                    <h className="Footer-title">Social media</h>
                    <div className="Footer-SocialMedia">
                        <a
                            href="https://www.instagram.com/falconxxl.media?igsh=ZWxsZ2t4djFoNTll&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="Instagram"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                        <a
                            href="https://www.youtube.com/@falcon-xxl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="YouTube"
                        >
                            <i className="fa-brands fa-youtube"></i>
                        </a>

                        <a
                            href="https://www.tiktok.com/@falconxxl2.0?_r=1&_t=ZG-92fGBLUC3Yu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="TikTok"
                        >
                            <i className="fa-brands fa-tiktok"></i>
                        </a>

                        <a
                            href="https://www.behance.net/falconxxl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="Behance"
                        >
                            <i className="fa-brands fa-square-behance"></i>
                        </a>


                        <a
                            href="https://dribbble.com/falconxxl-mail"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="Dribbble"
                        >
                            <i className="fa-brands fa-dribbble"></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/company/110433729/admin/dashboard"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="LinkedIn"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>


                        <a
                            href="https://open.spotify.com/user/31zx5mzrgc35qi44xl4weluuedqi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="Spotify"
                        >
                            <i className="fa-brands fa-spotify"></i>
                        </a>


                        <a
                            href="https://x.com/falconxxl20?s=11"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="X (Twitter)"
                        >
                            <i className="fa-brands fa-square-x-twitter"></i>
                        </a>
                    </div>
                </div>

            </div>

            <div className="Container-Footer-content2">
                <p>
                    Website developed by <strong>FALCON-XXL</strong><br/>
                    <i className="fa-regular fa-copyright"></i>&nbsp;
                    2026 <strong>FALCON-XXL</strong> | All rights are reserved
                </p>
            </div>
        </div>
    );
}

export default Footer;
