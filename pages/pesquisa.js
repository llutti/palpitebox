﻿import React from 'react';
import Link from 'next/link';

const Pesquisa = () =>
{
  return (
    <div>
      <h1 className='text-center font-bold my-4 text-2xl'>Criticas e Sugestões</h1>

      <p className='text-center mb-6'>
        O restaurante X sempre busca por atender melhor seus clientes.<br />
        Por isso, estamos sempre abertos a ouvir a sua opinão.
      </p>

      <div className='w-1/5 mx-auto'>
        <label className='font-bold'>Seu nome:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' />
      </div>

    </div>
  );
}

export default Pesquisa;
