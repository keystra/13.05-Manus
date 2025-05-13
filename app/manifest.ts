// src/app/manifest.ts
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'KeyStra Consultoria',
    short_name: 'KeyStra',
    description: 'Consultoria multidisciplinar orientada a resultados para pequenas e médias empresas',
    start_url: '/',
    display: 'standalone',
    background_color: '#005670',
    theme_color: '#005670',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
