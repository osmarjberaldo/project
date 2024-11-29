import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface VolumeControlProps {
  volume: number;
  isMuted: boolean;
  onVolumeChange: (volume: number) => void;
  onMuteToggle: () => void;
}

const VolumeControl: React.FC<VolumeControlProps> = ({
  volume,
  isMuted,
  onVolumeChange,
  onMuteToggle,
}) => {
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onVolumeChange(parseFloat(e.target.value));
  };

  return (
    <div className="flex items-center gap-4">
      <button 
        onClick={onMuteToggle}
        className="hover:text-purple-400 transition-colors"
      >
        {isMuted ? (
          <VolumeX className="w-8 h-8" />
        ) : (
          <Volume2 className="w-8 h-8" />
        )}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="w-48 h-2.5 bg-gray-700 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

export default VolumeControl;