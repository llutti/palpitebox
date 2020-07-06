import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Pesquisa = () =>
{
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: -1
  });
  const [success, setSuccess] = useState(false);
  const [retorno, setRetorno] = useState({});
  const notas = [0, 1, 2, 3, 4, 5];

  const save = async () =>
  {
    try
    {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      });

      const data = await response.json();
      setSuccess(true);
      setRetorno(data);
    }
    catch (error)
    {
      console.log('Ocorreu eu erro ao salvar', error);
    }
  }

  const onClick = (name, value) =>
  {
    const nome = name;
    const valor = value;

    setForm(old => ({
      ...old,
      [nome]: valor
    }))
  }

  const onChange = evt =>
  {
    const { name, value } = evt.target;

    setForm(old => ({
      ...old,
      [name]: value
    }))
  }
  return (
    <div>
      <PageTitle title='Pesquisa' />
      <h1 className='text-center font-bold mb-4 text-2xl'>Criticas e Sugestões</h1>

      <p className='text-center mb-4'>
        O restaurante X sempre busca por atender melhor seus clientes.<br />
        Por isso, estamos sempre abertos a ouvir a sua opinão.
      </p>

      {!success &&
        <div className='w-1/3 mx-auto pb-3'>

          <label className='font-bold'>Seu nome:</label>
          <input type='text' name='Nome' className='w-full p-3 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' onChange={onChange} value={form.Nome} />

          <label className='font-bold'>E-mail:</label>
          <input type='text' name='Email' className='w-full p-3 block shadow bg-blue-100 my-2 rounded' placeholder='E-mail' onChange={onChange} value={form.Email} />

          <label className='font-bold'>Whatsapp:</label>
          <input type='text' name='Whatsapp' className='w-full p-3 block shadow bg-blue-100 my-2 rounded' placeholder='Whatsapp' onChange={onChange} value={form.Whatsapp} />

          <div className='flex flex-row itens-center b-6 my-5'>
            <label className='font-bold w-1/7'>Nota:</label>
            {
              notas.map(nota =>
              {
                return (
                  <label key={'labelStar' + nota} className='w-1/7 px-2 text-2xl cursor-pointer text-center text-yellow-500'>
                    {
                      nota <= form.Nota && < FaStar key={'star' + nota} onClick={() => onClick('Nota', nota)} />
                    }
                    {
                      nota > form.Nota && < FaRegStar key={'star' + nota} onClick={() => onClick('Nota', nota)} />
                    }
                  </label>
                )
              })
            }
          </div>

          <div className='text-center'>
            <button className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
          </div>
        </div>
      }
      {
        success &&
        <div className='w-1/5 mx-auto pb-8'>
          <p className='text-center mb-6 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por sua Sugestão ou Crítica</p>
          {
            retorno.showCupom &&
            <div className='text-center border p-4 mb-4'>
              Seu cupom: <br />
              <span className='font-bold text-2xl'>
                {retorno.Cupom}
              </span>
            </div>
          }
          {
            retorno.showCupom &&
            <div className='text-center border p-4 mb-4'>
              <span className='font-bold block mb-2'>{retorno.Promo}</span>
              <br />
              <span className='italic'>
                Tire um print ou foto desta tela e apresente ao garçom.
              </span>
            </div>
          }
        </div>
      }
    </div>
  );
}

export default Pesquisa;
