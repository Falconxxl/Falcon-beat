import React, { useEffect, useRef } from 'react';
import './ModalLicense2.css';

const ModalLicense2 = ({ open, onClose }) => {
    const modalContentRef = useRef(null);

    // ✅ AMÉLIORATION : Empêcher le scroll du body quand le modal est ouvert
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup au démontage
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [open]);

    // ✅ AMÉLIORATION : Gérer la fermeture avec la touche Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && open) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [open, onClose]);

    // ✅ AMÉLIORATION : Fonction de scroll vers le prochain tableau
    const scrollToNextTable = () => {
        const modalContent = modalContentRef.current;
        if (!modalContent) return;

        const tables = modalContent.querySelectorAll('.license-table');
        const scrollTop = modalContent.scrollTop;
        const contentRect = modalContent.getBoundingClientRect();

        // Trouver le prochain tableau qui n'est pas complètement visible
        for (let i = 0; i < tables.length; i++) {
            const table = tables[i];
            const tableRect = table.getBoundingClientRect();
            const relativeTop = tableRect.top - contentRect.top + scrollTop;

            // Si le tableau est partiellement visible ou hors de vue, scroller vers lui
            if (relativeTop > scrollTop + 50) {
                modalContent.scrollTo({
                    top: relativeTop - 20,
                    behavior: 'smooth'
                });
                return;
            }
        }

        // Si on est à la fin, scroller vers le haut
        modalContent.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // ✅ AMÉLIORATION : Gérer le clic sur l'overlay pour fermer le modal (mobile friendly)
    const handleOverlayClick = (e) => {
        // Fermer uniquement si on clique directement sur l'overlay, pas sur le contenu
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // ✅ AMÉLIORATION : Gérer le touch sur l'overlay pour mobile
    const handleOverlayTouch = (e) => {
        if (e.target === e.currentTarget) {
            e.preventDefault();
            onClose();
        }
    };

    if (!open) return null;

    return (
        <div
            className="license-modal-overlay"
            onClick={handleOverlayClick}
            onTouchEnd={handleOverlayTouch}
        >
            <div
                ref={modalContentRef}
                className="license-modal-content"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Bouton de fermeture */}
                <button
                    className="license-modal-close-btn"
                    onClick={onClose}
                    aria-label="Close license modal"
                >
                    ✕
                </button>

                {/* ✅ AMÉLIORATION : Bouton pour scroller vers le bas (version mobile) */}
                <button
                    className="license-modal-scroll-btn"
                    onClick={scrollToNextTable}
                    aria-label="Scroll to next table"
                >
                    ↓
                </button>



                <h2 className="license-modal-title">License Terms & Agreement</h2>

                <div className="license-tables-container">

                    {/* Basic MP3 License */}
                    <div className="license-table">
                        <div className="license-table-header">
                            <div>
                                <h3 className="license-table-title basic">Basic Mp3</h3>
                                <p className="license-table-subtitle">License Terms</p>
                            </div>
                            <p className="license-table-price">Price: $30</p>
                        </div>
                        <div className="license-table-body">
                            <div className="license-row"><span>MP3</span><span className="checkmark">✓</span></div>
                            <div className="license-row"><span>WAV*</span><span className="checkmark">✓</span></div>
                            <div className="license-row"><span>Trackout*</span><span className="crossmark">✗</span></div>
                            <div className="license-row note"><span>*Please see individual beats for available files.</span></div>
                            <div className="license-row"><span>Distribution Copies</span><span>7500</span></div>
                            <div className="license-row"><span>Free Downloads</span><span>Unlimited</span></div>
                            <div className="license-row"><span>Performances (Non Profit)</span><span>2000</span></div>
                            <div className="license-row"><span>Paid Performances</span><span>200</span></div>
                            <div className="license-row"><span>Music Videos</span><span>1</span></div>
                            <div className="license-row"><span>Audio Streams</span><span>10000</span></div>
                            <div className="license-row"><span>Video Streams</span><span>10000</span></div>
                            <div className="license-row"><span>Broadcasting Rights</span><span className="checkmark">✓</span></div>
                            <div className="license-row"><span>Number of Radio Stations</span><span>None</span></div>
                        </div>
                    </div>

                    {/* Premium MP3 License */}
                    <div className="license-table">
                        <div className="license-table-header">
                            <div>
                                <h3 className="license-table-title premium">Premium Mp3</h3>
                                <p className="license-table-subtitle">License Terms</p>
                            </div>
                            <p className="license-table-price">Price: $50</p>
                        </div>
                        <div className="license-table-body">
                            <div className="license-row"><span>MP3</span><span className="checkmark">✓</span></div>
                            <div className="license-row"><span>WAV*</span><span className="checkmark">✓</span></div>
                            <div className="license-row"><span>Trackout*</span><span className="checkmark">✓</span></div>
                            <div className="license-row note"><span>*Please see individual beats for available files.</span></div>
                            <div className="license-row"><span>Distribution Copies</span><span>15000</span></div>
                            <div className="license-row"><span>Free Downloads</span><span>Unlimited</span></div>
                            <div className="license-row"><span>Performances (Non Profit)</span><span>3000</span></div>
                            <div className="license-row"><span>Paid Performances</span><span>300</span></div>
                            <div className="license-row"><span>Music Videos</span><span>1</span></div>
                            <div className="license-row"><span>Audio Streams</span><span>50000</span></div>
                            <div className="license-row"><span>Video Streams</span><span>50000</span></div>
                            <div className="license-row"><span>Broadcasting Rights</span><span className="checkmark">✓</span></div>
                            <div className="license-row"><span>Number of Radio Stations</span><span>2</span></div>
                        </div>
                    </div>

                    {/* Unlimited MP3 License */}
                    <div className="license-table">
                        <div className="license-table-header">
                            <div>
                                <h3 className="license-table-title unlimited"
                                    style={{color:"#f3bb2f"}}>
                                    Unlimited Mp3
                                </h3>
                                <p className="license-table-subtitle">License Terms</p>
                            </div>
                            <p className="license-table-price">Price: $100</p>
                        </div>
                        <div className="license-table-body">
                            <div className="license-row"><span>MP3</span><span className="checkmark">✓</span></div>
                            <div className="license-row"><span>WAV*</span><span className="checkmark">✓</span></div>
                            <div className="license-row"><span>Trackout*</span><span className="checkmark">✓</span></div>
                            <div className="license-row note"><span>*Please see individual beats for available files.</span></div>
                            <div className="license-row"><span>Distribution Copies</span><span>Unlimited</span></div>
                            <div className="license-row"><span>Free Downloads</span><span>Unlimited</span></div>
                            <div className="license-row"><span>Performances (Non Profit)</span><span>4000</span></div>
                            <div className="license-row"><span>Paid Performances</span><span>400</span></div>
                            <div className="license-row"><span>Music Videos</span><span>Unlimited</span></div>
                            <div className="license-row"><span>Audio Streams</span><span>Unlimited</span></div>
                            <div className="license-row"><span>Video Streams</span><span>Unlimited</span></div>
                            <div className="license-row"><span>Broadcasting Rights</span><span className="checkmark">✓</span></div>
                            <div className="license-row"><span>Number of Radio Stations</span><span>Unlimited</span></div>
                        </div>
                    </div>

                    {/* Exclusive License */}
                    <div className="license-table">
                        <div className="license-table-header">
                            <div>
                                <h3 className="license-table-title exclusive">Exclusive MP3</h3>
                                <p className="license-table-subtitle">License Terms</p>
                            </div>
                            <p className="license-table-price">Price: $500</p>
                        </div>
                        <div className="license-table-body">
                            <div className="license-row"><span>MP3</span><span className="checkmark">✓</span></div>
                            <div className="license-row"><span>WAV*</span><span className="checkmark">✓</span></div>
                            <div className="license-row"><span>Trackout*</span><span className="checkmark">✓</span></div>
                            <div className="license-row note"><span>*Please see individual beats for available files.</span></div>
                            <div className="license-row"><span>Distribution Copies</span><span>Unlimited</span></div>
                            <div className="license-row"><span>Free Downloads</span><span>Unlimited</span></div>
                            <div className="license-row"><span>Performances (Non Profit)</span><span>Unlimited</span></div>
                            <div className="license-row"><span>Paid Performances</span><span>Unlimited</span></div>
                            <div className="license-row"><span>Music Videos</span><span>Unlimited</span></div>
                            <div className="license-row"><span>Audio Streams</span><span>Unlimited</span></div>
                            <div className="license-row"><span>Video Streams</span><span>Unlimited</span></div>
                            <div className="license-row"><span>Broadcasting Rights</span><span className="checkmark">✓</span></div>
                            <div className="license-row"><span>Number of Radio Stations</span><span>Unlimited</span></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ModalLicense2;