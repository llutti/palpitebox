import React from 'react';
import Link from 'next/link';

const Contato = () =>
{
  return (
    <div>
      <h4>Contato</h4>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
}

export default Contato;
