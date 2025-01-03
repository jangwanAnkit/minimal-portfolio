import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = 'Ankit Jangwan - Full Stack Developer',
  description = 'Full Stack Developer and Cloud Integration Expert with 4+ years of experience in web development, specializing in delivering streamlined full-stack development and seamless B2B solutions integration.',
  image = 'https://avatars.githubusercontent.com/u/105637896?v=4',
  url = 'https://ankit-rana-portfolio.pages.dev',
  type = 'website',
}: SEOProps) => {
  const siteName = 'Ankit Jangwan Portfolio';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="author" content="Ankit Jangwan" />
      <meta name="keywords" content="Full Stack Developer, Web Development, React, TypeScript, Node.js, Cloud Integration, B2B Solutions" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Helmet>
  );
};

export default SEO; 