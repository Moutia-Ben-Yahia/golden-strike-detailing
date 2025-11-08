import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO = ({
  title = 'CleanStrike Unit - Luxury Mobile Car Detailing Monaco',
  description = 'Professional mobile car detailing in Monaco. Premium interior & exterior cleaning, ceramic coating, and maintenance plans. Your car, detailed with precision — wherever you are.',
  keywords = 'car detailing Monaco, mobile car wash Monaco, ceramic coating Monaco, car cleaning Monaco, interior detailing Monaco, exterior detailing Monaco, luxury car detailing, Monte Carlo car detailing, Beausoleil car wash, Menton car detailing',
  image = '/og-image.jpg',
  url = 'https://cleanstrikeunit.com',
  type = 'website',
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="CleanStrike Unit" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Geo Meta Tags */}
      <meta name="geo.region" content="MC" />
      <meta name="geo.placename" content="Monaco" />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="CleanStrike Unit" />
    </Helmet>
  );
};
