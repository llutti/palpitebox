import React from 'react';
import Link from 'next/link';
import PageTitle from '../components/PageTitle';

const Contato = () =>
{
  return (
    <div>
      <PageTitle title='Contato' />
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
