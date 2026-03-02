import './BannerLicense.css';
import desktop_banner1 from "../../src/Assets/LisencePicDesk5.png";
import mobile_banner from "../../src/Assets/LisencePicMobile4.png";

function BannerLicense() {


    return (
        <header className="hero-banner">
            {/* Image desktop */}
            <img src={desktop_banner1} alt="Banner desktop" className="hero-image desktop-image" />

            {/* Image mobile */}
            <img src={mobile_banner} alt="Banner mobile" className="hero-image mobile-image" />


            <div className="hero-content">

                <h1>Music License</h1>

                <p>
                    We offer three categories of instrumentals and music products <br/>
                    designed for different types of creators and businesses.
                </p>

            </div>

            <div className="scroll-down">
                <i className="fa-solid fa-angles-down"></i>
            </div>
        </header>
    );
}

export default BannerLicense;

