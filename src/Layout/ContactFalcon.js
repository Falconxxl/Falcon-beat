import './ContactFalcon.css';
import React, {useState} from "react";

import emailjs from '@emailjs/browser';


function ContactFalcon() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        role: '',
        company: '',
        email: '',
        phone: '',
        cityCountry: '',
        projectDesc: ''
    });

    const [errors, setErrors] = useState({});

    // ✅ Validation adaptée au formulaire CONTACT
    const validate = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!formData.cityCountry.trim()) newErrors.cityCountry = 'City / Country is required';
        if (!formData.projectDesc.trim()) newErrors.projectDesc = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // ✅ Envoi EmailJS
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        const templateParams = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            role: formData.role,
            company: formData.company,
            email: formData.email,
            phone: formData.phone,
            cityCountry: formData.cityCountry,
            projectDesc: formData.projectDesc,
            submission_date: new Date().toLocaleString()
        };

        emailjs.send(
            'service_230td4v',
            'template_y1t79yt',
            templateParams,
            '9muouI1nF6x1Do-Pe'
        )
            .then(() => {
                alert('✅ Your message has been sent successfully!');

                setFormData({
                    firstName: '',
                    lastName: '',
                    role: '',
                    company: '',
                    email: '',
                    phone: '',
                    cityCountry: '',
                    projectDesc: ''
                });
            })
            .catch((error) => {
                console.error(error);
                alert('❌ An error occurred. Please try again later.');
            });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    return (
        <div>

            <div className="Container-Contact">
                <div className="Container-Contact-text">
                    <h1>Get to know us</h1>
                    <h2>No-obligation advice. Always honest.</h2>
                    <p>
                        We’re here to help you. We always go just a step further <br/>
                        in our communication. Let us know what your preference is.
                    </p>
                </div>
            </div>

            {/*----------------contact form---------------*/}

            <div className="Contact-form-container">
                <form className="form-section" onSubmit={handleSubmit}>

                    <div className="line"></div>
                    <h2 style={{marginBottom:"20px"}}
                        className="request-form-title">A convenient callback service</h2>

                    <p style={{color:"white", fontFamily:"Poppins", marginBottom:"40px"}}>
                        Leave your details and we will contact you on business days right away.<br/>
                        It’s that simple.
                    </p>

                    <div className="row">
                        <div className="field">
                            <label className="request-form-label"></label>
                            <input name="firstName"
                                   value={formData.firstName}
                                   onChange={handleChange}
                                   className="Input-hover"
                                   placeholder="first name*"
                                   style={{width:"100%", height:"50px", borderRadius:"14px"
                                       ,fontSize:"15px", fontFamily:"Poppins", paddingLeft:"14px",
                                       color: "white", background:"transparent"}}
                            />
                        </div>
                        {errors.firstName && <p className="error">{errors.firstName}</p>}

                        <div className="field">
                            <input name="lastName"
                                   className="Input-hover"
                                   value={formData.lastName}
                                   onChange={handleChange}
                                   placeholder="Last name*"
                                   style={{width:"100%", height:"50px", borderRadius:"14px", marginLeft:"0px"
                                       ,fontSize:"15px", fontFamily:"Poppins", paddingLeft:"14px",
                                       color: "white", background:"transparent"}}/>
                        </div>
                        {errors.lastName && <p className="error">{errors.lastName}</p>}

                    </div>

                    <div className="field full">
                        <label className="request-form-label"></label>
                        <input name="role" value={formData.role} onChange={handleChange}
                               placeholder="Role in the company (optional)"
                               className="Input-hover"
                               style={{width:"100%", height:"50px", borderRadius:"14px"
                                   , paddingLeft:"14px",fontSize:"15px", fontFamily:"Poppins",
                                   color: "white", background:"transparent"}}/>
                    </div>
                    {/*{errors.role && <p className="error">{errors.role}</p>}*/}

                    <div className="field full">
                        <label className="request-form-label"></label>
                        <input name="company" value={formData.company} onChange={handleChange}
                               placeholder="Company (optional)"
                               className="Input-hover"
                               style={{width:"100%", height:"50px", borderRadius:"14px"
                                   , paddingLeft:"14px",fontSize:"15px", fontFamily:"Poppins",
                                   color: "white", background:"transparent"}}/>
                    </div>

                    <div className="field full">
                        <label className="request-form-label"></label>
                        <input name="email" value={formData.email} onChange={handleChange}
                               placeholder="Email*"
                               className="Input-hover"
                               style={{width:"100%", height:"50px", borderRadius:"14px"
                                   , paddingLeft:"14px",fontSize:"15px", fontFamily:"Poppins",
                                   color: "white", background:"transparent"}}/>
                    </div>
                    {errors.email && <p className="error">{errors.email}</p>}

                    <div className="field full">
                        <label className="request-form-label"></label>
                        <input name="phone" value={formData.phone} onChange={handleChange}
                               placeholder="Phone number (Only if you prefer to be contacted by phone)"
                               className="Input-hover"
                               style={{width:"100%", height:"50px", borderRadius:"14px"
                                   , paddingLeft:"10px",fontSize:"15px", fontFamily:"Poppins",
                                   color: "white", background:"transparent"}}/>
                    </div>
                    {/*{errors.phone && <p className="error">{errors.phone}</p>}*/}

                    <div className="field full">
                        <label className="request-form-label"></label>
                        <input name="cityCountry" value={formData.cityCountry} onChange={handleChange}
                               placeholder="City/County*"
                               className="Input-hover"
                               style={{width:"100%", height:"50px", borderRadius:"14px"
                                   , paddingLeft:"14px",fontSize:"15px", fontFamily:"Poppins",
                                   color: "white", background:"transparent"}}/>
                    </div>
                    {errors.cityCountry && <p className="error">{errors.cityCountry}</p>}

                    <div className="field full">
                        <label className="request-form-label"></label>
                        <textarea name="projectDesc" value={formData.projectDesc}
                                  onChange={handleChange}
                                  className="Input-hover"
                                  placeholder="Describe your project..."
                                  style={{width:"100%", height:"150px", borderRadius:"14px",
                                      padding:"14px",marginBottom:"10px", fontSize:"15px", fontFamily:"Poppins",
                                      color: "white", background:"transparent"}}>
                            </textarea>
                    </div>
                    {errors.projectDesc && <p className="error">{errors.projectDesc}</p>}

                    <button className="submit-btn-requestAQuote">Contact us</button>
                </form>

                {/*--------------section-contact-info---------------*/}

                <div className="section-contact-info">

                    <div className="line-contact-info"></div>

                    <h1 className="title-info-contact">Questions? Ask our FalconXXL team</h1>

                    <div className="contact-info-CallMail">
                        <i className="fa-solid fa-phone fa-3x"></i>
                        <p> <strong style={{color:"#f3bb2f"}}>Call us : </strong> +31685533124</p>
                    </div>
                    <div className="contact-info-CallMail">
                        <i className="fa-solid fa-envelope fa-3x"></i>
                        <p><strong style={{color:"#f3bb2f"}}>E-mail us : </strong> falconxxl.mail@gmail.com</p>
                    </div>

                    <div className="contact-social-media">
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
                            href="https://www.tiktok.com/@falconxxl2.0?_r=1&_t=ZG-92fGBLUC3Yu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="TikTok"
                        >
                            <i className="fa-brands fa-tiktok"></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/company/110433729"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="LinkedIn"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>

                        <a
                            href="https://wa.me/31685533124?text=Bonjour%20je%20souhaite%20un%20devis"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon fa-3x"
                            aria-label="WhatsApp"
                        >
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>

                    </div>
                </div>

                {/*--------------container-planner---------------*/}

            </div>
        </div>
    );
}

export default ContactFalcon;

