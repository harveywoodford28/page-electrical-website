import type { MetadataRoute } from 'next';
import { services } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://page-electrical.co.uk';
  const routes = ['', '/about', '/services', '/reviews', '/faq', '/contact'];
  const serviceRoutes = services.map((s) => `/services/${s.slug}`);
  return [...routes, ...serviceRoutes].map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: r === '' ? 1 : 0.7,
  }));
}
