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
    </Head>
  )
};

export default SEO;
