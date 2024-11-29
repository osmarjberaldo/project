import React from 'react';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import AudioVisualizer from './AudioVisualizer';
import PlayButton from './PlayButton';
import VolumeControl from './VolumeControl';
import ErrorMessage from './ErrorMessage';
import { RADIO_CONFIG } from '../constants/config';

const AudioPlayer = () => {
  const {
    audioRef,
    isPlaying,
    isLoading,
    volume,
    isMuted,
    error,
    togglePlay,
    toggleMute,
    handleVolumeChange,
  } = useAudioPlayer();

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black"></div>
      
      <div className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl">
        <audio 
          ref={audioRef}
          crossOrigin={RADIO_CONFIG.crossOrigin}
          preload="none"
        />
        
        <AudioVisualizer isPlaying={isPlaying} />

        <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          {RADIO_CONFIG.name}
        </h1>

        <ErrorMessage message={error} />
        
        <div className="flex flex-col items-center gap-12 mt-8">
          <PlayButton 
            isPlaying={isPlaying} 
            isLoading={isLoading} 
            onClick={togglePlay} 
          />
          
          <div className="w-full max-w-[280px] flex justify-center">
            <VolumeControl
              volume={volume}
              isMuted={isMuted}
              onVolumeChange={handleVolumeChange}
              onMuteToggle={toggleMute}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;