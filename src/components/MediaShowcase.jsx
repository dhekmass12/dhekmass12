import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Camera, Video } from "lucide-react";

export default function MediaShowcase({ media, telemetryType, activeMode = "photo", heightClass = "h-56" }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className={`relative w-full ${heightClass} bg-slate-950 overflow-hidden rounded-xl border border-slate-800 group`}>
      {activeMode === "photo" ? (
        <div className="relative w-full h-full">
          <img
            src={media.photoUrl}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>
      ) : (
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            src={media.videoUrl}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />

          <div className="absolute top-3 left-3 right-3 flex justify-between items-start pointer-events-none">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/85 backdrop-blur-md border border-emerald-500/40 text-[11px] font-mono text-emerald-300">
              <Video className="w-3.5 h-3.5 animate-pulse" />
              <span>LIVE INFERENCE DEMO</span>
            </div>

            {telemetryType === "cv-bbox" && (
              <div className="px-2 py-0.5 rounded bg-cyan-500/20 border border-cyan-400 text-[10px] font-mono text-cyan-200">
                YOLOv8-INT8: 118 FPS | Conf: 0.94
              </div>
            )}
            {telemetryType === "rag-stream" && (
              <div className="px-2 py-0.5 rounded bg-purple-500/20 border border-purple-400 text-[10px] font-mono text-purple-200">
                vLLM Stream: 84 tok/s | Faithfulness: 0.96
              </div>
            )}
            {telemetryType === "audio-wave" && (
              <div className="px-2 py-0.5 rounded bg-amber-500/20 border border-amber-400 text-[10px] font-mono text-amber-200">
                Whisper-v3 RTF: 0.09x | Speaker_01
              </div>
            )}
            {telemetryType === "gpu-cluster" && (
              <div className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-400 text-[10px] font-mono text-emerald-200">
                8x A100 NVLink | VRAM: 68.4/80GB
              </div>
            )}
          </div>

          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={togglePlay}
                className="p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 transition"
                title={isPlaying ? "Pause Video" : "Play Video"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                className="p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 transition"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
