import React from 'react';

const Footer = () =>
{
  return (
    <div className='bg-gray-700 p-4'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto Desenvolvido por: llutti /
        <a className='px-2 hover:underline' target='_blank' href='https://linkedin.com/in/llutti'>Linkedin</a> /
        <a className='px-2 hover:underline' target='_blank' href='https://github.com/llutti'>Github</a>
        <div className='mt-2'>
          <img className='inline p-4' src='/logo_semana_fsm.png' alt='PalpiteBox' />
          <img className='inline p-4' src='/logo_devpleno.png' alt='PalpiteBox' />

        </div>
      </div>
    </div>
  );
}

export default Footer;