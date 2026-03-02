import React, { useState } from 'react';
import './Collab2.css';
import emailjs from '@emailjs/browser';

const Collab2 = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        whatsapp: '',
        socialMedia: '',
        musicStyle: '',
        genre: '',
        projectType: [],
        mixingMastering: '',
        audioDemo: null,
        projectDescription: ''
    });

    const [fileName, setFileName] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prevState => {
            const updatedProjectType = checked
                ? [...prevState.projectType, value]
                : prevState.projectType.filter(item => item !== value);
            return {
                ...prevState,
                projectType: updatedProjectType
            };
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prevState => ({
                ...prevState,
                audioDemo: file
            }));
            setFileName(file.name);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.fullName || !formData.email || !formData.whatsapp) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }

        const templateParams = {
            fullName: formData.fullName,
            email: formData.email,
            whatsapp: formData.whatsapp,
            socialMedia: formData.socialMedia,
            musicStyle: formData.musicStyle,
            genre: formData.genre,
            projectType: formData.projectType.join(', '),
            mixingMastering: formData.mixingMastering,
            audioDemo: fileName || 'Aucun fichier',
            projectDescription: formData.projectDescription,
            submission_date: new Date().toLocaleString()
        };

        emailjs.send(
            'service_230td4v',
            'template_y1t79yt',
            templateParams,
            '9muouI1nF6x1Do-Pe'
        )
            .then(() => {
                alert('✅ Votre demande a été envoyée avec succès !');
                setFormData({
                    fullName: '',
                    email: '',
                    whatsapp: '',
                    socialMedia: '',
                    musicStyle: '',
                    genre: '',
                    projectType: [],
                    mixingMastering: '',
                    audioDemo: null,
                    projectDescription: ''
                });
                setFileName('');
            })
            .catch((error) => {
                console.error(error);
                alert('❌ Une erreur est survenue. Veuillez réessayer plus tard.');
            });
    };

    return (
        <div className="collab-page">
            {/* Header / Introduction */}
            <section className="collab-header">
                <div className="collab-container">
                    <h1>Collaborez avec <span>Falcon Beat</span></h1>
                    <div className="collab-intro">
                        <p style={{color:"white"}}>
                            Bienvenue sur la page de collaboration de <strong>Falcon Beat</strong> !
                            Ici, nous créons des beats de qualité professionnelle et accompagnons les artistes
                            dans la réalisation de leurs projets musicaux.
                        </p>
                        <p style={{color:"white"}}>Que vous soyez à la recherche de :</p>
                        <ul style={{color:"white"}}>
                            <li>Direction artistique complète</li>
                            <li>Création de beats sur mesure</li>
                            <li>Écriture de textes et mélodies</li>
                        </ul>
                        <p style={{color:"white"}}>
                            …ou même une chanson complète, nous sommes là pour vous accompagner et donner vie
                            à vos idées musicales.
                        </p>
                        <p style={{color:"white"}}>
                            Si cela vous intéresse, vous pouvez nous contacter via WhatsApp, Instagram, TikTok,
                            ou nous envoyer directement votre démo pour que nous puissions l'écouter.
                        </p>
                    </div>

                    <div className="contact-buttons">
                        <a href="https://wa.me/33123456789" className="contact-btn whatsapp" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i> WhatsApp
                        </a>
                        <a href="https://www.instagram.com/falconbeat2.0?igsh=Y3pqd2Q5aGRhcjFv&utm_source=qr" className="contact-btn instagram" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                        <a href="https://www.tiktok.com/@whogotflow1?_r=1&_t=ZG-94CbE6wyxHN" className="contact-btn tiktok" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-tiktok"></i> TikTok
                        </a>
                    </div>
                </div>
            </section>

            {/* Section Formulaire */}
            <section className="collab-form-section">
                <div className="collab-container">
                    <h2>Envoyez-nous votre projet</h2>
                    <p className="form-description">
                        Pour collaborer avec nous, veuillez remplir le formulaire ci-dessous en nous donnant
                        un maximum d'informations sur votre projet. Cela nous aidera à comprendre vos besoins
                        et à créer un produit sur mesure pour vous.
                    </p>

                    <form className="collab-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullName">Nom complet <span className="required">*</span></label>
                            <input type="text" id="fullName" name="fullName" value={formData.fullName}
                                   onChange={handleInputChange} placeholder="Votre nom complet" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email <span className="required">*</span></label>
                            <input type="email" id="email" name="email" value={formData.email}
                                   onChange={handleInputChange} placeholder="votre.email@exemple.com" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="whatsapp">WhatsApp <span className="required">*</span></label>
                            <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp}
                                   onChange={handleInputChange} placeholder="+33 6 12 34 56 78" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="socialMedia">Instagram ou TikTok (optionnel)</label>
                            <input type="text" id="socialMedia" name="socialMedia" value={formData.socialMedia}
                                   onChange={handleInputChange} placeholder="@votre_pseudo" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="musicStyle">Style de musique <span className="required">*</span></label>
                            <input type="text" id="musicStyle" name="musicStyle" value={formData.musicStyle}
                                   onChange={handleInputChange} placeholder="Hip-hop, R&B, Trap, Afrobeat, etc." required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="genre">Genres pour lesquels vous souhaitez collaborer</label>
                            <select id="genre" name="genre" value={formData.genre} onChange={handleInputChange}>
                                <option value="">Sélectionnez un genre</option>
                                <option value="rap">Rap</option>
                                <option value="trap">Trap</option>
                                <option value="rnb">R&B</option>
                                <option value="afrobeat">Afrobeat</option>
                                <option value="pop">Pop</option>
                                <option value="drill">Drill</option>
                                <option value="autre">Autre</option>
                            </select>
                        </div>

                        <div className="form-group-radio">
                            <label>Type de projet <span className="required">*</span></label>
                            <div className="radio-options">
                                <div className="radio-option">
                                    <input type="checkbox" id="beats-only" name="projectType"
                                           value="Production de beats seulement"
                                           checked={formData.projectType.includes('Production de beats seulement')}
                                           onChange={handleCheckboxChange} />
                                    <label htmlFor="beats-only">Production de beats seulement</label>
                                </div>
                                <div className="radio-option">
                                    <input type="checkbox" id="writing" name="projectType"
                                           value="Écriture des textes"
                                           checked={formData.projectType.includes('Écriture des textes')}
                                           onChange={handleCheckboxChange} />
                                    <label htmlFor="writing">Écriture des textes</label>
                                </div>
                                <div className="radio-option">
                                    <input type="checkbox" id="complete-song" name="projectType"
                                           value="Chanson complète"
                                           checked={formData.projectType.includes('Chanson complète')}
                                           onChange={handleCheckboxChange} />
                                    <label htmlFor="complete-song">Chanson complète (beats, textes, mélodies, direction artistique)</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group-radio">
                            <label>Souhaitez-vous que nous fassions le mixage et mastering ?</label>
                            <div className="radio-options">
                                <div className="radio-option">
                                    <input type="radio" id="mixing-yes" name="mixingMastering" value="Oui"
                                           checked={formData.mixingMastering === 'Oui'} onChange={handleInputChange} />
                                    <label htmlFor="mixing-yes">Oui</label>
                                </div>
                                <div className="radio-option">
                                    <input type="radio" id="mixing-no" name="mixingMastering" value="Non"
                                           checked={formData.mixingMastering === 'Non'} onChange={handleInputChange} />
                                    <label htmlFor="mixing-no">Non</label>
                                </div>
                                <div className="radio-option">
                                    <input type="radio" id="mixing-maybe" name="mixingMastering" value="Peut-être"
                                           checked={formData.mixingMastering === 'Peut-être'} onChange={handleInputChange} />
                                    <label htmlFor="mixing-maybe">Peut-être / Je ne sais pas encore</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="audioDemo">Démo audio (optionnel)</label>
                            <div className="file-upload-wrapper">
                                <input type="file" id="audioDemo" name="audioDemo"
                                       accept="audio/*" onChange={handleFileChange} />
                                <label htmlFor="audioDemo" className="file-upload-label">
                                    <i className="fas fa-cloud-upload-alt"></i>
                                    <span>Cliquez pour uploader votre démo (MP3, WAV, etc.)</span>
                                </label>
                            </div>
                            {fileName && <div className="file-name">Fichier sélectionné : {fileName}</div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="projectDescription">Description détaillée du projet ou des éléments souhaités</label>
                            <textarea id="projectDescription" name="projectDescription"
                                      value={formData.projectDescription} onChange={handleInputChange}
                                      placeholder="Décrivez votre vision, vos références musicales, l'ambiance souhaitée, le message de votre projet, etc. Plus vous nous donnez d'informations, mieux nous pourrons répondre à vos attentes.">
                            </textarea>
                        </div>

                        <div className="form-note">
                            <strong>Note :</strong> Plus vous nous fournissez d'informations, mieux nous pourrons
                            répondre à vos attentes et créer un produit parfaitement adapté à votre vision.
                        </div>

                        <div className="submit-section">
                            <button type="submit" className="submit-btn">
                                <i className="fas fa-paper-plane"></i> Envoyer ma demande
                            </button>
                        </div>

                        <div className="contact-buttons">
                            <a href="https://wa.me/31685533124" className="contact-btn whatsapp" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp" style={{ fontSize: '30px'}}></i>
                                Ou contactez-nous sur WhatsApp
                            </a>
                            <a href="https://www.instagram.com/falconbeat2.0?igsh=Y3pqd2Q5aGRhcjFv&utm_source=qr" className="contact-btn instagram" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram fa-2x" style={{ fontSize: '30px' }}></i>
                                Instagram
                            </a>
                            <a href="https://www.tiktok.com/@whogotflow1?_r=1&_t=ZG-94CbE6wyxHN" className="contact-btn tiktok" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-tiktok fa-2x" style={{ fontSize: '30px'}}></i>
                                TikTok
                            </a>
                        </div>
                    </form>
                </div>
            </section>

            {/* Section Falcon XXL */}
            <section className="falcon-xxl-section">
                <div className="collab-container">
                    <h2><span>Falcon XXL</span> La société mère</h2>
                    <p className="falcon-xxl-description">
                        Saviez-vous que <strong>Falcon Beats</strong> fait partie de <strong>Falcon Double XL</strong>,
                        notre société mère ? Chez Falcon Double XL, nous proposons des services premium pour les artistes,
                        notamment :
                    </p>
                    <div className="falcon-xxl-services">
                        <div className="service-card">
                            <i className="fas fa-video"></i>
                            <h3>Vidéoclips professionnels</h3>
                            <p>Création de vidéoclips de haute qualité qui racontent votre histoire et captivent votre audience.</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-palette"></i>
                            <h3>Design graphique</h3>
                            <p>Conception de logos uniques et chartes graphiques complètes pour votre identité visuelle.</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-laptop-code"></i>
                            <h3>Sites web pour artistes</h3>
                            <p>Création de sites web professionnels et modernes pour développer votre présence en ligne.</p>
                        </div>
                    </div>
                    <div className="falcon-xxl-cta">
                        <a href="http://localhost:3000"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="falcon-xxl-btn">
                            Découvrir tous nos services
                        </a>
                    </div>
                </div>
            </section>

            {/* Section Nos Productions */}
            <section className="productions-section">
                <div className="collab-container">
                    <h2>Écoutez nos créations</h2>
                    <p className="productions-description">
                        Bientôt, vous pourrez découvrir nos productions et beats exclusifs.
                        Pour le moment, nous travaillons à enrichir cette section avec nos meilleurs morceaux.
                    </p>
                    <div className="coming-soon">
                        <i className="fas fa-music"></i> Bientôt disponible
                    </div>
                </div>
            </section>

            {/* Section CTA Final */}
            <section className="final-cta-section">
                <div className="collab-container">
                    <h2 style={{color: 'black'}}>Prêt à collaborer avec nous ?</h2>
                    <p style={{color: 'black'}}>
                        Remplissez le formulaire, envoyez-nous votre démo et laissez-nous créer quelque chose
                        d'unique pour vous ! Ensemble, donnons vie à votre vision musicale.
                    </p>
                    <div className="contact-buttons">
                        <a href="#collab-form" className="contact-btn whatsapp"
                           onClick={(e) => {
                               e.preventDefault();
                               document.querySelector('.collab-form-section').scrollIntoView({ behavior: 'smooth' });
                           }}>
                            <i className="fas fa-edit"></i> Remplir le formulaire
                        </a>
                        <a href="https://wa.me/31685533124" className="contact-btn instagram" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i> Contacter via WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Collab2;