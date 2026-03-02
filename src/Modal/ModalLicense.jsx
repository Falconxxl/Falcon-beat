// import './ModalLicense.css';
//
// function ModalLicense({ isOpen, onClose }) {
//     if (!isOpen) return null;
//
//     return (
//         // <div className="license-modal-overlay" >
//         //     <div className="license-modal-content" >
//         //         <button
//         //             className="license-modal-close-btn"
//         //             onClick={onClose}
//         //             aria-label="Close license modal"
//         //         >
//         //             ✕
//         //         </button>
//         //
//         //         <h2 className="license-modal-title">License Terms & Agreement</h2>
//         //
//         //         <div className="license-tables-container">
//         //             {/* Basic MP3 License */}
//         //             <div className="license-table">
//         //                 <div className="license-table-header">
//         //                     <div>
//         //                         <h3 className="license-table-title basic">Basic Mp3</h3>
//         //                         <p className="license-table-subtitle">License Terms</p>
//         //                     </div>
//         //                     <p className="license-table-price">Price: $30</p>
//         //                 </div>
//         //                 <div className="license-table-body">
//         //                     <div className="license-row">
//         //                         <span>MP3</span>
//         //                         <span className="checkmark">✓</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>WAV*</span>
//         //                         <span className="checkmark">✓</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Trackout*</span>
//         //                         <span className="crossmark">✗</span>
//         //                     </div>
//         //                     <div className="license-row note">
//         //                         <span>*Please see individual beats for available files.</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Distribution Copies</span>
//         //                         <span>7500</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Free Downloads</span>
//         //                         <span>Unlimited</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Performances (Non Profit)</span>
//         //                         <span>2000</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Paid Performances</span>
//         //                         <span>200</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Music Videos</span>
//         //                         <span>1</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Audio Streams</span>
//         //                         <span>10000</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Video Streams</span>
//         //                         <span>10000</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Broadcasting Rights</span>
//         //                         <span className="checkmark">✓</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Number of Radio Stations</span>
//         //                         <span>None</span>
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //
//         //             {/* Premium MP3 License */}
//         //             <div className="license-table">
//         //                 <div className="license-table-header">
//         //                     <div>
//         //                         <h3 className="license-table-title premium">Premium Mp3</h3>
//         //                         <p className="license-table-subtitle">License Terms</p>
//         //                     </div>
//         //                     <p className="license-table-price">Price: $50</p>
//         //                 </div>
//         //                 <div className="license-table-body">
//         //                     <div className="license-row">
//         //                         <span>MP3</span>
//         //                         <span className="checkmark">✓</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>WAV*</span>
//         //                         <span className="checkmark">✓</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Trackout*</span>
//         //                         <span className="checkmark">✓</span>
//         //                     </div>
//         //                     <div className="license-row note">
//         //                         <span>*Please see individual beats for available files.</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Distribution Copies</span>
//         //                         <span>15000</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Free Downloads</span>
//         //                         <span>Unlimited</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Performances (Non Profit)</span>
//         //                         <span>3000</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Paid Performances</span>
//         //                         <span>300</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Music Videos</span>
//         //                         <span>1</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Audio Streams</span>
//         //                         <span>50000</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Video Streams</span>
//         //                         <span>50000</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Broadcasting Rights</span>
//         //                         <span className="checkmark">✓</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Number of Radio Stations</span>
//         //                         <span>2</span>
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //
//         //             {/* Unlimited MP3 License */}
//         //             <div className="license-table">
//         //                 <div className="license-table-header">
//         //                     <div>
//         //                         <h3 className="license-table-title unlimited">Unlimited Mp3</h3>
//         //                         <p className="license-table-subtitle">License Terms</p>
//         //                     </div>
//         //                     <p className="license-table-price">Price: $100</p>
//         //                 </div>
//         //                 <div className="license-table-body">
//         //                     <div className="license-row">
//         //                         <span>MP3</span>
//         //                         <span className="checkmark">✓</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>WAV*</span>
//         //                         <span className="checkmark">✓</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Trackout*</span>
//         //                         <span className="checkmark">✓</span>
//         //                     </div>
//         //                     <div className="license-row note">
//         //                         <span>*Please see individual beats for available files.</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Distribution Copies</span>
//         //                         <span>Unlimited</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Free Downloads</span>
//         //                         <span>Unlimited</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Performances (Non Profit)</span>
//         //                         <span>4000</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Paid Performances</span>
//         //                         <span>400</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Music Videos</span>
//         //                         <span>Unlimited</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Audio Streams</span>
//         //                         <span>Unlimited</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Video Streams</span>
//         //                         <span>Unlimited</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Broadcasting Rights</span>
//         //                         <span className="checkmark">✓</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Number of Radio Stations</span>
//         //                         <span>Unlimited</span>
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //
//         //             {/* Exclusive MP3 License */}
//         //             <div className="license-table">
//         //                 <div className="license-table-header">
//         //                     <div>
//         //                         <h3 className="license-table-title exclusive">Exclusive MP3</h3>
//         //                         <p className="license-table-subtitle">License Terms</p>
//         //                     </div>
//         //                     <p className="license-table-price">Price: $500</p>
//         //                 </div>
//         //                 <div className="license-table-body">
//         //                     <div className="license-row">
//         //                         <span>MP3</span>
//         //                         <span className="checkmark">✓</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>WAV*</span>
//         //                         <span className="checkmark">✓</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Trackout*</span>
//         //                         <span className="checkmark">✓</span>
//         //                     </div>
//         //                     <div className="license-row note">
//         //                         <span>*Please see individual beats for available files.</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Distribution Copies</span>
//         //                         <span>Unlimited</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Free Downloads</span>
//         //                         <span>Unlimited</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Performances (Non Profit)</span>
//         //                         <span>Unlimited</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Paid Performances</span>
//         //                         <span>Unlimited</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Music Videos</span>
//         //                         <span>Unlimited</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Audio Streams</span>
//         //                         <span>Unlimited</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Video Streams</span>
//         //                         <span>Unlimited</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Broadcasting Rights</span>
//         //                         <span className="checkmark">✓</span>
//         //                     </div>
//         //                     <div className="license-row">
//         //                         <span>Number of Radio Stations</span>
//         //                         <span>Unlimited</span>
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //     </div>
//         // </div>
//     );
// }
//
// export default ModalLicense;