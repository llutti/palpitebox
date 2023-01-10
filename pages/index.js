import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import SEO from '../components/SEO';

const fetcher = (...args) => fetch(...args).then(res => res.json());


const Index = () =>
{
  const { data, error } = useSWR('/api/get-promo', fetcher);

  return (
    <div>
      <SEO title='Seja bem vindo' />
      <p className='mt-12 text-center'>
        O restaurante X sempre busca por atender melhor seus clientes.<br />
        Por isso, estamos sempre abertos a ouvir a sua opinão.
      </p>

      <div className="text-center my-12">
        <Link href='/pesquisa' className='bg-blue-400 px-12 py-4 font-bold  rounded-lg shadow-lg hover:shadow'>
          Acessar Pesquisa
        </Link>
      </div>

      {
        !data &&
        <div className="overflow-x-hidden overflow-y-auto bg-black bg-opacity-50 fixed inset-0 z-50 outline-none justify-center items-center flex">
          <div className="relative w-auto my-6 mx-auto max-w-6xl">
            <div className="mx-auto loader"></div>
          </div>
        </div>
      }
      { !error && data && data?.showCupom &&
        <p className='mt-12 mb-12 text-center'>
          { data?.messageCupom }
        </p>
      }
    </div>
  );
};

export default Index;