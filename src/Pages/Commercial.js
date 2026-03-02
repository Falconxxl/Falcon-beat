import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import './Commercial.css';
import logo from '../Assets/Logo_falcon_beat13e.png'
import ModalLicense2 from "../Modal/ModalLicense2";
import { Helmet } from 'react-helmet-async';



// ==================== CMS - BEATS MANAGEMENT ====================
const beatsData = {
    'Intro (Theme Music)': [],
    'Ads (Advertising)': [],
    'Background music': [],
    'Corporate (Brand)': [],
    'Afro-cultural': [],
    'Emotional': [],
    'Cinematic': [],
};

// Composant pour les icônes sociales
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

function Commercial() {
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [currentBeat, setCurrentBeat] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.7);
    const [isRepeat, setIsRepeat] = useState(false);
    const [isShuffle, setIsShuffle] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [lastBackwardPress, setLastBackwardPress] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const audioRef = useRef(null);
    const sidebarRef = useRef(null);
    const progressRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const isLoadingRef = useRef(false);

    const whatsappNumber = '+31685533124';

    const [openModal, setOpenModal] = useState(false);

    // const [showLicenseModal, setShowLicenseModal] = useState(false);

    const getWhatsappLink = (beat) => {
        const message = encodeURIComponent(`Hello, I am interested in the beat "${beat.title}" by ${beat.producer} (${beat.genre})`);
        return `https://wa.me/${whatsappNumber}?text=${message}`;
    };

    const getInstagramLink = (beat) => {
        return `https://instagram.com/YOUR_INSTAGRAM`;
    };

    const handleBuyClick = (beat) => {
        if (!beat.AirbitLink || beat.AirbitLink === "") {
            setModalMessage(`This beat "${beat.title}" is not yet available on Airbeats (PayPal purchase platform). Feel free to contact us on WhatsApp for alternative purchase options.`);
            setShowModal(true);
        } else {
            window.open(beat.AirbitLink, '_blank', 'noopener,noreferrer');
        }
    };

    // ✅ Amélioration : fonction pour ouvrir le modal avec un délai pour garantir une animation fluide
    const handleOpenModal = (e) => {
        e.stopPropagation();
        // Désactiver le scroll du body
        document.body.style.overflow = 'hidden';
        setOpenModal(true);
    };

    // ✅ Amélioration : fonction pour fermer le modal proprement
    const handleCloseModal = () => {
        setOpenModal(false);
        // Réactiver le scroll du body
        document.body.style.overflow = 'unset';
    };

    // Charger Font Awesome
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(link);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showFilters && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                const filterToggle = document.querySelector('.mobile-filter-toggle');
                if (filterToggle && !filterToggle.contains(event.target)) {
                    setShowFilters(false);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showFilters]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
            audioRef.current.loop = isRepeat;
        }
    }, [volume, isRepeat]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);
        const handleEnded = () => {
            if (!isRepeat) {
                handleNext();
            }
        };

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [isRepeat, selectedGenre, currentBeat, isShuffle]);

    const handlePlayPause = async (beat) => {
        if (isLoadingRef.current) return;

        const audio = audioRef.current;

        if (currentBeat?.id === beat.id) {
            if (isPlaying) {
                audio.pause();
                setIsPlaying(false);
            } else {
                isLoadingRef.current = true;
                try {
                    await audio.play();
                    setIsPlaying(true);
                } catch (error) {
                    if (error.name !== 'AbortError') {
                        console.error('Error playing audio:', error);
                    }
                } finally {
                    isLoadingRef.current = false;
                }
            }
        } else {
            isLoadingRef.current = true;
            audio.pause();
            audio.currentTime = 0;
            setIsPlaying(false);
            setCurrentBeat(beat);

            setTimeout(async () => {
                try {
                    await audio.play();
                    setIsPlaying(true);
                } catch (error) {
                    if (error.name !== 'AbortError') {
                        console.error('Error playing audio:', error);
                    }
                } finally {
                    isLoadingRef.current = false;
                }
            }, 100);
        }
    };

    const handleNext = () => {
        const beats = getAllBeats();
        if (!beats || beats.length === 0 || !currentBeat) return;

        let nextBeat;
        if (isShuffle) {
            const randomIndex = Math.floor(Math.random() * beats.length);
            nextBeat = beats[randomIndex];
        } else {
            const currentIndex = beats.findIndex(b => b.id === currentBeat.id);
            const nextIndex = (currentIndex + 1) % beats.length;
            nextBeat = beats[nextIndex];
        }

        setCurrentBeat(nextBeat);
        setTimeout(async () => {
            try {
                await audioRef.current.play();
                setIsPlaying(true);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Error playing next track:', error);
                }
            }
        }, 100);
    };

    const handlePrevious = () => {
        const beats = getAllBeats();
        if (!beats || beats.length === 0 || !currentBeat) return;

        const now = Date.now();
        const timeSinceLastPress = now - lastBackwardPress;

        if (timeSinceLastPress < 500 && currentTime < 3) {
            const currentIndex = beats.findIndex(b => b.id === currentBeat.id);
            const prevIndex = currentIndex === 0 ? beats.length - 1 : currentIndex - 1;
            const prevBeat = beats[prevIndex];
            setCurrentBeat(prevBeat);
            setTimeout(async () => {
                try {
                    await audioRef.current.play();
                    setIsPlaying(true);
                } catch (error) {
                    if (error.name !== 'AbortError') {
                        console.error('Error playing previous track:', error);
                    }
                }
            }, 100);
        } else {
            audioRef.current.currentTime = 0;
        }

        setLastBackwardPress(now);
    };

    const formatTime = (time) => {
        if (isNaN(time)) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleSeek = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        audioRef.current.currentTime = pos * duration;
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        handleTouchMove(e);
    };

    const handleTouchMove = (e) => {
        if (!isDragging && e.type !== 'touchstart') return;
        const touch = e.touches[0];
        const rect = progressRef.current.getBoundingClientRect();
        const pos = Math.max(0, Math.min(1, (touch.clientX - rect.left) / rect.width));
        audioRef.current.currentTime = pos * duration;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const handleGenreSelect = (genre) => {
        setSelectedGenre(genre);
        setShowFilters(false);
        setSearchQuery('');

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const getAllBeats = () => {
        if (selectedGenre === 'All') {
            return Object.values(beatsData).flat();
        }
        return beatsData[selectedGenre] || [];
    };

    const genres = ['All', ...Object.keys(beatsData)];
    let currentBeats = getAllBeats();

    if (searchQuery.trim()) {
        currentBeats = currentBeats.filter(beat =>
            beat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            beat.producer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            beat.genre.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    return (

        <>
            <Helmet>
                <title>Falcon Beats – Professional Beats for Artists</title>
                <meta name="description" content="Discover Falcon Beats, the ultimate platform for artists. Listen, choose, and purchase high-quality beats from various genres, available worldwide at an affordable price." />
                <meta name="keywords" content="beats, instrumentals, music production, high-quality beats, online beat store, music platform" />
                <meta name="author" content="Falcon Beats" />
            </Helmet>

        <div className="App">
            <audio ref={audioRef} src={currentBeat?.audio} />

            {showFilters && <div className="sidebar-overlay" onClick={() => setShowFilters(false)}></div>}
            {mobileMenuOpen && <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}></div>}

            {/* Navbar */}
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
                        <NavLink
                            to="/"
                            className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}
                        >
                            Beats
                        </NavLink>

                        <NavLink
                            to="/Commercial"
                            style={{color: "#f3bb2f"}}
                            className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}
                        >
                            Commercial
                        </NavLink>
                        <NavLink
                            to="/Songs"
                            className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}
                        >
                            Songs
                        </NavLink>
                        <NavLink
                            to="/New"
                            className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}
                        >
                            New*
                        </NavLink>
                        <NavLink
                            to="/License"
                            className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}
                        >
                            License
                        </NavLink>
                        {/*<NavLink*/}
                        {/*    to="/About"*/}
                        {/*    className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}*/}
                        {/*>*/}
                        {/*    About*/}
                        {/*</NavLink>*/}
                        <NavLink
                            to="/Collab"
                            className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}
                        >
                            Collab
                        </NavLink>
                        <NavLink
                            to="/Faq"
                            className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}
                        >
                            Contact
                        </NavLink>

                        <a href="https://www.falconxxl.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="navbar-link active">FalconXXL</a>
                    </div>

                    <SocialIcons />

                    <button className="mobile-filter-toggle" onClick={() => setShowFilters(!showFilters)}>
                        <i className="fas fa-filter"></i>
                        <span className="filter-text">Filters</span>
                    </button>

                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello, I am interested in your beats!')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-contact-btn desktop-only"
                    >
                        <i style={{ fontSize: "1.5em" }}
                           className="fa-brands fa-whatsapp"></i>
                    </a>
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
                        <a href="https://www.falconxxl.com" className="mobile-menu-link mobile-menu-link-special" onClick={() => setMobileMenuOpen(false)}>FalconXXL</a>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="main-container">
                <aside ref={sidebarRef} className={`sidebar ${showFilters ? 'show' : ''}`}>
                    <div className="sidebar-header">
                        <h2>Genres</h2>
                        <button className="sidebar-close-btn" onClick={() => setShowFilters(false)}>✕</button>
                    </div>
                    <p className="filter-subtitle">Pick a commercial Beat genre</p>

                    <div className="genre-filters">
                        {genres.map((genre) => {
                            const displayName = genre === 'All' ? 'All Commercial Beats' : genre;
                            const count = genre === 'All' ? Object.values(beatsData).flat().length : beatsData[genre].length;
                            return (
                                <button
                                    key={genre}
                                    onClick={() => handleGenreSelect(genre)}
                                    className={`genre-btn ${selectedGenre === genre ? 'active' : ''}`}
                                >
                                    {displayName}
                                    <span className="beat-count">{count}</span>
                                </button>
                            );
                        })}
                    </div>
                </aside>

                <main className="beats-section">
                    <div className="search-container">
                        <i className="fas fa-search search-icon"></i>
                        <input
                            type="text"
                            placeholder="Search beats..."
                            className="search-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <p className="search-tagline">Find your beat and contact us via
                            <strong style={{color:"#2aff87"}}> Whatsapp </strong>
                            to get it!
                        </p>
                    </div>

                    <div className="section-header">
                        <h2 className="section-title">
                            {selectedGenre === 'All' ? 'All Commercial beats' : `${selectedGenre} Beats`}
                        </h2>
                        <p className="section-subtitle">
                            {currentBeats.length} beat{currentBeats.length !== 1 ? 's' : ''} available
                        </p>
                    </div>

                    <div className="beats-list">
                        {currentBeats.length === 0 ? (
                            <div className="no-results">
                                <i className="fas fa-music"></i>
                                <p>No beats found</p>
                            </div>
                        ) : (
                            currentBeats.map((beat, index) => (
                                <div key={beat.id} className="beat-card">
                                    <div className="beat-number desktop-only">{index + 1}</div>

                                    <div className="beat-play-container">
                                        {currentBeat?.id === beat.id && isPlaying ? (
                                            <div
                                                className="playing-bars"
                                                onClick={() => handlePlayPause(beat)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        ) : (
                                            <button
                                                className="beat-play-btn"
                                                onClick={() => handlePlayPause(beat)}
                                            >
                                                <i className="fa-solid fa-play"></i>
                                            </button>
                                        )}
                                    </div>

                                    <div className="beat-info" onClick={() => handlePlayPause(beat)}>
                                        <h3 className="beat-title">{beat.title}</h3>

                                        {/* ✅ TÂCHE 1 : Genre déplacé ici (en dessous du titre) avec le style du bouton Price */}
                                        <span className="beat-genre-below-title">{beat.genre}</span>
                                    </div>

                                    {/* ✅ TÂCHE 1 : Bouton Price déplacé ici (à la place du genre) avec le style du genre tag */}
                                    <button
                                        className="beat-price-tag"
                                        onClick={handleOpenModal}
                                    >
                                        Prices
                                    </button>

                                    <span className="beat-bpm desktop-only">{beat.bpm} BPM</span>

                                    <button
                                        onClick={() => handleBuyClick(beat)}
                                        className="buy-beat-btn"
                                    >
                                        Buy
                                    </button>

                                    <a
                                        href={getInstagramLink(beat)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="instagram-beat-btn desktop-only"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>

                                    <a
                                        href={getWhatsappLink(beat)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="get-beat-btn"
                                    >
                                        <i className="fa-brands fa-whatsapp"></i>
                                        <span className="get-beat-text">Get this Beat</span>
                                    </a>
                                </div>
                            ))
                        )}
                    </div>
                </main>
            </div>

            {/* Fixed Player */}
            {currentBeat && (
                <div className="player">
                    <div className="player-container desktop-player">
                        <div className="player-left">
                            {isPlaying ? (
                                <div
                                    className="player-playing-bars"
                                    onClick={() => handlePlayPause(currentBeat)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            ) : (
                                <div className="player-play-placeholder"></div>
                            )}

                            <div className="player-info">
                                <div className="player-title">{currentBeat.title}</div>
                                <div className="player-producer">by {currentBeat.producer}</div>
                            </div>
                        </div>

                        <div className="player-center">
                            <div className="player-timeline">
                                <span className="time">{formatTime(currentTime)}</span>
                                <div className="timeline-bar" onClick={handleSeek}>
                                    <div className="timeline-progress" style={{ width: `${(currentTime / duration) * 100 || 0}%` }}></div>
                                </div>
                                <span className="time">{formatTime(duration)}</span>
                            </div>

                            <div className="player-controls">
                                <button className={`control-btn ${isShuffle ? 'active' : ''}`} onClick={() => setIsShuffle(!isShuffle)}>
                                    <i className="fa-solid fa-shuffle"></i>
                                </button>

                                <button className="control-btn" onClick={handlePrevious}>
                                    <i className="fa-solid fa-backward-step"></i>
                                </button>

                                <button className="control-btn-play" onClick={() => handlePlayPause(currentBeat)}>
                                    <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                                </button>

                                <button className="control-btn" onClick={handleNext}>
                                    <i className="fa-solid fa-forward-step"></i>
                                </button>

                                <button className={`control-btn ${isRepeat ? 'active' : ''}`} onClick={() => setIsRepeat(!isRepeat)}>
                                    <i className="fa-solid fa-repeat"></i>
                                </button>
                            </div>

                            <div className="player-copyright" style={{color:"white"}}>
                                Website developed by FALCON-XXL
                                2026 FALCON-XXL | All rights are reserved
                            </div>
                        </div>

                        <div className="player-right">
                            <div className="player-volume">
                                <i className="fas fa-volume-up volume-icon"></i>
                                <div className="volume-bar-container">
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.01"
                                        value={volume}
                                        onChange={(e) => setVolume(parseFloat(e.target.value))}
                                        className="volume-slider"
                                    />
                                    <div className="volume-level" style={{ width: `${volume * 100}%` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mobile-player">
                        <div
                            ref={progressRef}
                            className="mobile-progress-bar"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div className="mobile-progress-fill" style={{ width: `${(currentTime / duration) * 100 || 0}%` }}></div>
                        </div>

                        <div className="mobile-player-content">
                            {isPlaying ? (
                                <div
                                    className="mobile-playing-bars"
                                    onClick={() => handlePlayPause(currentBeat)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            ) : (
                                <div className="mobile-play-placeholder"></div>
                            )}

                            <div className="mobile-player-info">
                                <div className="mobile-player-title">{currentBeat.title}</div>
                                <div className="mobile-player-producer">by {currentBeat.producer}</div>
                            </div>

                            <div className="mobile-player-controls">
                                <button className="mobile-control-btn" onClick={handlePrevious}>
                                    <i className="fa-solid fa-backward-step"></i>
                                </button>

                                <button className="mobile-control-btn-play" onClick={() => handlePlayPause(currentBeat)}>
                                    <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                                </button>

                                <button className="mobile-control-btn" onClick={handleNext}>
                                    <i className="fa-solid fa-forward-step"></i>
                                </button>
                            </div>
                        </div>

                        <div className="mobile-social-icons">
                            <SocialIcons />
                        </div>
                    </div>
                </div>
            )}

            {/* ✅ TÂCHE 2 : Modal License amélioré */}
            <ModalLicense2
                open={openModal}
                onClose={handleCloseModal}
            />

            {/* Modal pour beats non disponibles */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="modal-close-btn"
                            onClick={() => setShowModal(false)}
                            aria-label="Close modal"
                        >
                            ✕
                        </button>
                        <div className="modal-body">
                            <i className="fas fa-info-circle modal-icon"></i>
                            <p className="modal-message">{modalMessage}</p>
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello, I am interested in purchasing a beat not available on Airbeats.')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-whatsapp-btn"
                            >
                                <i className="fa-brands fa-whatsapp"></i>
                                Contact us on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>

      </>
    );
}

export default Commercial;