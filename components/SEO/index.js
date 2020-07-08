import React from 'react';
import Head from 'next/head';
import { SEOConfig } from '../../config/SEOConfig';

const SEO = ({ title }) =>
{
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" type="image/png" href="/palpitebox.png" />

      <title>{title} - {SEOConfig.title}</title>
      <meta name="description" content={SEOConfig.description}></meta>
      <meta name="author" content={SEOConfig.author} />
      <meta name="image" content={SEOConfig.image} />

      // OpenGraph (Facebook)
      {SEOConfig.type && <meta property="og:type" content={SEOConfig.type} />}
      {SEOConfig.url && <meta property="og:url" content={SEOConfig.url} />}
      {SEOConfig.title && <meta property="og:title" content={SEOConfig.title} />}
      {SEOConfig.description && <meta property="og:description" content={SEOConfig.description} />}
      {SEOConfig.image && <meta property="og:image" content={SEOConfig.image} />}

      // Twitter
      <meta name="twitter:card" content="summary_large_image" />
      {SEOConfig.twitterUsername && <meta name="twitter:creator" content={SEOConfig.twitterUsername} />}
      {SEOConfig.title && <meta name="twitter:title" content={SEOConfig.title} />}
      {SEOConfig.description && <meta name="twitter:description" content={SEOConfig.description} />}
      {SEOConfig.image && <meta name="twitter:image" content={SEOConfig.image} />}

    </Head>
  )
};

export default SEO;
