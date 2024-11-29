import { useState, useEffect } from 'react';
import { RADIO_CONFIG } from '../constants/config';
import { NowPlaying } from '../types/nowPlaying';

export const useNowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState<NowPlaying | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNowPlaying = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(RADIO_CONFIG.nowPlayingUrl, {
        headers: {
          'Accept': 'text/html',
          'Cache-Control': 'no-cache'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch now playing data');
      }
      
      const text = await response.text();
      
      // Criar um elemento temporário para inserir o HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = text;
      
      // Encontrar a tabela com as músicas tocadas
      const table = tempDiv.querySelector('table');
      if (!table) {
        throw new Error('No song data found');
      }
      
      // Pegar a primeira linha (música atual)
      const firstRow = table.querySelector('tr:not(:first-child)');
      if (firstRow) {
        const cells = firstRow.querySelectorAll('td');
        if (cells.length >= 2) {
          // O formato parece ser "Artista - Título"
          const fullText = cells[1].textContent || '';
          const [artist, title] = fullText.split(' - ').map(s => s.trim());
          
          setNowPlaying({
            timestamp: cells[0].textContent?.trim() || '',
            artist: artist || '',
            title: title || fullText // Se não houver separador, usar o texto completo como título
          });
        }
      }
    } catch (err) {
      console.error('Error fetching now playing:', err);
      setError('Unable to fetch current song information');
      setNowPlaying(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, RADIO_CONFIG.updateInterval);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return {
    nowPlaying,
    loading,
    error,
    refresh: fetchNowPlaying
  };
};
