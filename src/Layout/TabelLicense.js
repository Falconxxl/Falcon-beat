import React from "react";
import "./TabelLicense.css";

const licenses = [
    {
        title: "Basic Mp3",
        price: "$30",
        trackout: false,
        copies: "7500",
        nonProfit: "2000",
        paid: "200",
        videos: "1",
        audio: "10000",
        video: "1000",
        radio: "None",
    },
    {
        title: "Premium Mp3",
        price: "$50",
        trackout: true,
        copies: "15000",
        nonProfit: "3000",
        paid: "300",
        videos: "1",
        audio: "50000",
        video: "5000",
        radio: "2",
    },
    {
        title: "Unlimited Mp3",
        price: "$100",
        trackout: true,
        copies: "Unlimited",
        nonProfit: "4000",
        paid: "400",
        videos: "Unlimited",
        audio: "Unlimited",
        video: "Unlimited",
        radio: "Unlimited",
    },
    {
        title: "Exclusive MP3",
        price: "$500",
        trackout: true,
        copies: "Unlimited",
        nonProfit: "Unlimited",
        paid: "Unlimited",
        videos: "Unlimited",
        audio: "Unlimited",
        video: "Unlimited",
        radio: "Unlimited",
    },
];

function TabelLicense() {
    return (
        <div className="license-wrapper">
            <h1 className="license-main-title">License Terms & Agreement for the Artists</h1>

            <div className="license-grid">
                {licenses.map((lic, index) => (
                    <div className="license-card" key={index}>
                        <div className="license-header">
                            <h2 className="license-title">{lic.title}</h2>
                            <p className="license-sub">License Terms</p>
                            <p className="license-price">Price: {lic.price}</p>
                        </div>

                        <div className="license-body">
                            <Row label="MP3" value="✓" check />
                            <Row label="WAV*" value="✓" check />
                            <Row label="Trackout*" value={lic.trackout ? "✓" : "✗"} check={lic.trackout} />
                            <div className="license-note">*Please see individual beats for available files.</div>

                            <Row label="Distribution Copies" value={lic.copies} />
                            <Row label="Free Downloads" value="Unlimited" />
                            <Row label="Performances (Non Profit)" value={lic.nonProfit} />
                            <Row label="Paid Performances" value={lic.paid} />
                            <Row label="Music Videos" value={lic.videos} />
                            <Row label="Audio Streams" value={lic.audio} />
                            <Row label="Video Streams" value={lic.video} />
                            <Row label="Broadcasting Rights" value="✓" check />
                            <Row label="Number of Radio Stations" value={lic.radio} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const Row = ({ label, value, check }) => (
    <div className="license-row">
        <span>{label}</span>
        <span className={check ? "check" : value === "✗" ? "cross" : ""}>{value}</span>
    </div>
);

export default TabelLicense;
