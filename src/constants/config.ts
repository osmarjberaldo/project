export const RADIO_CONFIG = {
  streamUrl: 'https://centova.svdns.com.br:19333/stream',
  nowPlayingUrl: 'https://centova.svdns.com.br:19333/played.html?sid=1',
  name: 'VanessaFM',
  defaultVolume: 0.65,
  retryAttempts: 3,
  retryDelay: 2000,
  timeoutDuration: 10000,
  crossOrigin: 'anonymous' as const,
  updateInterval: 30000, // Atualizar informações da música a cada 30 segundos
};