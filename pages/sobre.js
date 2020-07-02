import React from 'react';
import Link from 'next/link';

const Sobre = () =>
{
  return (
    <div>
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
