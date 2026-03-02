import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Share2, SkipForward, SkipBack, Volume2 } from "lucide-react";
import "./BeatShowcaseApp.css";

// Base de données des beats
const beatsDatabase = {
    "Hip-Hop": [
        {
            id: 1,
            title: "Urban Flow",
            bpm: 140,
            key: "Am",
            price: "29.99",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        },
        {
            id: 2,
            title: "Street Vibes",
            bpm: 95,
            key: "Dm",
            price: "34.99",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        },
    ],

    "R&B": [
        {
            id: 3,
            title: "Smooth Soul",
            bpm: 75,
            key: "F",
            price: "44.99",
            url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        },
    ],
};

const BeatShowcaseApp = () => {
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [currentBeat, setCurrentBeat] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.7);
    const audioRef = useRef(null);

    const genres = Object.keys(beatsDatabase);

    useEffect(() => {
        if (audioRef.current) audioRef.current.volume = volume;
    }, [volume]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);

        audio.addEventListener("timeupdate", updateTime);
        audio.addEventListener("loadedmetadata", updateDuration);

        return () => {
            audio.removeEventListener("timeupdate", updateTime);
            audio.removeEventListener("loadedmetadata", updateDuration);
        };
    }, []);

    const handlePlayPause = (beat) => {
        if (currentBeat?.id === beat.id) {
            isPlaying ? audioRef.current.pause() : audioRef.current.play();
            setIsPlaying(!isPlaying);
        } else {
            setCurrentBeat(beat);
            setIsPlaying(true);
            setTimeout(() => audioRef.current.play(), 100);
        }
    };

    const formatTime = (time) =>
        `${Math.floor(time / 60)}:${Math.floor(time % 60).toString().padStart(2, "0")}`;

    return (
        <div className="app">
            <audio ref={audioRef} src={currentBeat?.url} />

            <header className="header">
                <h1>🎵 Beat Showcase</h1>
                <p>Découvrez mes meilleurs beats</p>
            </header>

            <div className="layout">
                <aside className="sidebar">
                    <h2>Genres</h2>
                    {genres.map((genre) => (
                        <button
                            key={genre}
                            className={selectedGenre === genre ? "genre active" : "genre"}
                            onClick={() => setSelectedGenre(genre)}
                        >
                            {genre}
                        </button>
                    ))}
                </aside>

                <main className="content">
                    {!selectedGenre && <p>Sélectionnez un genre</p>}

                    {selectedGenre &&
                        beatsDatabase[selectedGenre].map((beat) => (
                            <div key={beat.id} className="beat-card">
                                <button className="play-btn" onClick={() => handlePlayPause(beat)}>
                                    {currentBeat?.id === beat.id && isPlaying ? <Pause /> : <Play />}
                                </button>

                                <div className="beat-info">
                                    <h3>{beat.title}</h3>
                                    <span>{beat.bpm} BPM • {beat.key}</span>
                                </div>

                                <span className="price">${beat.price}</span>

                                <button className="share-btn">
                                    <Share2 />
                                </button>
                            </div>
                        ))}
                </main>
            </div>

            {currentBeat && (
                <footer className="player">
                    <div className="progress">
                        <div
                            className="progress-bar"
                            style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                        />
                    </div>

                    <div className="player-controls">
                        <SkipBack />
                        <button onClick={() => handlePlayPause(currentBeat)}>
                            {isPlaying ? <Pause /> : <Play />}
                        </button>
                        <SkipForward />
                        <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                        <Volume2 />
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={(e) => setVolume(e.target.value)}
                        />
                    </div>
                </footer>
            )}
        </div>
    );
};

export default BeatShowcaseApp;
