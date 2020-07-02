import React from 'react';
import Link from 'next/link';

const Header = () =>
{
  return (
    <>
      <div className='bg-gray-200 shadow-md p-4'>
        <div className='container mx-auto'>
          <Link href='/'>
            <a>
              <img className='mx-auto' src='/logo_palpitebox.png' alt='PalpiteBox' />
            </a>
          </Link>
        </div>
      </div>

      <div className='bg-gray-300 shadow-md p-4 text-center'>
        <Link href='/sobre'>
          <a className='px-2 hover:underline'>Sobre</a>
        </Link>
        <Link href='/contato'>
          <a className='px-2 hover:underline'>Contato</a>
        </Link>
        <Link href='/pesquisa'>
          <a className='px-2 hover:underline'>Pesquisa</a>
        </Link>
      </div>
    </>
  );
}

export default Header;
