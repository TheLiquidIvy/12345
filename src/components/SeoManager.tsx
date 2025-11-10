import { Helmet, HelmetProvider } from 'react-helmet-async';

interface SeoManagerProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export function SeoManager({ title, description, imageUrl }: SeoManagerProps) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {imageUrl && <meta property="og:image" content={imageUrl} />}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      </Helmet>
    </HelmetProvider>
  );
}
