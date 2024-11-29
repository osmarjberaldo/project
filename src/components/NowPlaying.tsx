import React from 'react';
import { useNowPlaying } from '../hooks/useNowPlaying';
import { Music, RefreshCw } from 'lucide-react';

const NowPlaying: React.FC = () => {
  const { nowPlaying, loading, error, refresh } = useNowPlaying();

  if (error) {
    return (
      <div className="flex items-center justify-center gap-2 mt-4 text-red-400">
        <button 
          onClick={refresh}
          className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-400/10 hover:bg-red-400/20 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Retry</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      <div className="flex items-center gap-2">
        {loading ? (
          <RefreshCw className="w-4 h-4 animate-spin text-purple-400" />
        ) : (
          <Music className="w-4 h-4 animate-bounce text-purple-400" />
        )}
        <span className="font-medium text-purple-400">Now Playing</span>
      </div>
      
      {nowPlaying ? (
        <div className="text-center">
          <h3 className="text-lg font-bold text-white">
            {nowPlaying.title}
          </h3>
          {nowPlaying.artist && (
            <p className="text-sm text-white/60">
              {nowPlaying.artist}
            </p>
          )}
          <p className="text-xs text-white/40 mt-1">
            Started at {nowPlaying.timestamp}
          </p>
        </div>
      ) : (
        <p className="text-sm text-white/60">
          {loading ? 'Loading...' : 'No song information available'}
        </p>
      )}
    </div>
  );
};

export default NowPlaying;
