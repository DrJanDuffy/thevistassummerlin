"use client";
import { useState, useRef } from "react";

interface AudioPlayerProps {
  src: string;
  title?: string;
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full flex items-center px-4 py-2 z-50">
      <button
        onClick={togglePlay}
        aria-label={playing ? "Pause audio" : "Play audio"}
        className="mr-3 text-xl focus:outline-none"
      >
        {playing ? "⏸️" : "▶️"}
      </button>
      <span className="text-sm font-medium">{title || "Home Buying & Selling Audio Guide"}</span>
      <audio
        ref={audioRef}
        src={src}
        onEnded={() => setPlaying(false)}
        className="hidden"
      />
    </div>
  );
} 