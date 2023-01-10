import React from 'react';
import Link from 'next/link';

const Header = () =>
{
  return (
    <header className='bg-gray-200 p-4'>
      <div className='container mx-auto flex items-end justify-between flex-col md:flex-row'>
        <div className='w-full md:w-1/4 ml-auto flex items-center justify-center'>
          <Link href='/'>
            <img src='/logo_palpitebox.png' alt='PalpiteBox' />
          </Link>
        </div>

        <div className='w-full md:w-1/4 mr-auto flex items-center justify-center'>
          <Link href='/sobre' className='px-2 text-base md:hover:font-bold'>
            Sobre
          </Link>
          <Link href='/contato' className='px-2 text-base md:hover:font-bold'>
            Contato
          </Link>
          <Link href='/pesquisa' className='px-2 text-base md:hover:font-bold'>
            Pesquisa
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
