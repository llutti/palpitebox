﻿import React from 'react';
import Link from 'next/link';

const Index = () =>
{
  return (
    <div>
      <p className='mt-12 text-center'>
        O restaurante X sempre busca por atender melhor seus clientes.<br />
        Por isso, estamos sempre abertos a ouvir a sua opinão.
      </p>

      <div className="text-center my-12">
        <Link href='/pesquisa'>
          <a className='bg-blue-400 px-12 py-4 font-bold  rounded-lg shadow-lg hover:shadow'>
            Dar opinião ou sugestão
          </a>
        </Link>
      </div>

      <p className='mt-12 text-center'>
        Mensagem do desconto
      </p>
    </div>
  );
}

export default Index;