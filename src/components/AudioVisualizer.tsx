import React from 'react';
import { Radio } from 'lucide-react';

interface AudioVisualizerProps {
  isPlaying: boolean;
}

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ isPlaying }) => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 shadow-lg shadow-purple-500/20">
        <div className="absolute inset-0 rounded-full overflow-hidden backdrop-blur-sm">
          <Radio 
            className={`w-full h-full p-6 text-white transition-transform duration-1000 ${
              isPlaying ? 'animate-spin-slow' : 'scale-95 opacity-80'
            }`} 
          />
        </div>
        {isPlaying && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 animate-pulse" />
        )}
      </div>
    </div>
  );
};

export default AudioVisualizer;