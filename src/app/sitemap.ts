// DŮLEŽITÉ: říká Nextu, že se má stránka staticky předgenerovat
export const dynamic = "force-static";

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: 'https://odhadyvachuska.cz',
      lastModified,
      priority: 1,
    },
    {
      url: 'https://odhadyvachuska.cz/odhady',
      lastModified,
      priority: 0.9,
    },
    {
      url: 'https://odhadyvachuska.cz/design',
      lastModified,
      priority: 0.8,
    }
  ];
}
