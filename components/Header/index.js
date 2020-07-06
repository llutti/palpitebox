import React from 'react';
import Link from 'next/link';

const Header = () =>
{
  return (
    <header className='bg-gray-200 p-4'>
      <div className='container mx-auto flex items-end justify-between flex-col md:flex-row'>
        <div className='w-full md:w-1/4 ml-auto flex items-center justify-center'>
          <Link href='/'>
            <a>
              <img className='' src='/logo_palpitebox.png' alt='PalpiteBox' />
            </a>
          </Link>
        </div>

        <div className='w-full md:w-1/4 mr-auto flex items-center justify-center'>
          <Link href='/sobre'>
            <a className='px-2 text-base hover:font-bold'>Sobre</a>
          </Link>
          <Link href='/contato'>
            <a className='px-2 hover:font-bold'>Contato</a>
          </Link>
          <Link href='/pesquisa'>
            <a className='px-2 text-base hover:font-bold'>Pesquisa</a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
