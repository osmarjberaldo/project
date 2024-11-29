import React from 'react';
import { Play, Pause, Loader2 } from 'lucide-react';

interface PlayButtonProps {
  isPlaying: boolean;
  isLoading: boolean;
  onClick: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({ isPlaying, isLoading, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center transform hover:scale-105 transition-all disabled:opacity-75 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <Loader2 className="w-8 h-8 text-white animate-spin" />
      ) : isPlaying ? (
        <Pause className="w-8 h-8 text-white" />
      ) : (
        <Play className="w-8 h-8 text-white ml-1" />
      )}
    </button>
  );
};

export default PlayButton;