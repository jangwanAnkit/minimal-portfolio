import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import type { SeoData } from '../types/portfolio';

interface SEOProps {
  customData?: Partial<SeoData>;
}

const SEO = ({ customData }: SEOProps) => {
  const [seoData, setSeoData] = useState<SeoData | null>(null);

  useEffect(() => {
    fetch('/data/seo.json')
      .then(res => res.json())
      .then(data => setSeoData(data))
      .catch(err => console.error('Failed to load SEO data:', err));
  }, []);

  if (!seoData) {
    return null;
  }

  const data = { ...seoData, ...customData };

  return (
    <Helmet>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={data.url} />

      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content={data.image} />
      <meta property="og:url" content={data.url} />
      <meta property="og:type" content={data.type} />
      <meta property="og:site_name" content={data.siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content={data.image} />

      <meta name="author" content={data.author} />
      <meta name="keywords" content={data.keywords.join(', ')} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Helmet>
  );
};

export default SEO;