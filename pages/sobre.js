import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

const Sobre = () =>
{
  return (
    <div>
      <SEO title='Sobre' />
      <h4>Sobre!</h4>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Sobre;
