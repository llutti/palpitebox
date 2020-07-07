import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Pesquisa = () =>
{
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 0,
    loading: false,
    nomeValid: true,
    emailValid: false,
    whatsappValid: false,
    formValid: false,
    notaValid: true,
    errorMsg: {
      nome: '',
      email: '',
      whatsapp: '',
      nota: ''
    }
  });
  const [success, setSuccess] = useState(false);
  const [retorno, setRetorno] = useState({});
  const notas = [1, 2, 3, 4, 5];

  const save = async () =>
  {
    if (form.Nota === 0)
    {
      let { notaValid, errorMsg } = form;
      notaValid = false;
      errorMsg.nota = 'Faltou sua avaliação';

      setForm(old => ({
        ...old,
        notaValid,
        errorMsg
      }))

      return;
    }

    try
    {
      setForm(old => ({
        ...old,
        loading: true
      }));

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
      setForm(old => ({
        ...old,
        loading: false
      }));

    }
  }

  const onClick = (name, value) =>
  {
    const nome = name;
    const valor = value;

    setForm(old => ({
      ...old,
      notaValid: true,
      [nome]: valor
    }))
  }

  const onChange = evt =>
  {
    const { name, value } = evt.target;
    let { nomeValid, emailValid, whatsappValid, formValid, errorMsg } = form;

    if ((form.Nome === '')
      && ((name === 'Email')
        || (name === 'Whatsapp')))
    {
      nomeValid = false;
      errorMsg.nome = 'É obrigatório informar o seu nome';
    }

    switch (name)
    {
      case 'Nome':
        {
          nomeValid = true;
          errorMsg.nome = '';
          break;
        }
      case 'Email':
        {
          emailValid = true;
          errorMsg.email = '';
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          {
            emailValid = false;
            errorMsg.email = 'Formato do E-mail é inválido';
          }
          break;
        }
      case 'Whatsapp':
        {
          const phoneNum = value.replace(/[^\d]/g, '');
          whatsappValid = true;
          errorMsg.whatsapp = '';
          if ((phoneNum.length < 7)
            || (phoneNum.length > 11))
          {
            whatsappValid = false;
            errorMsg.whatsapp = 'Número do Whatsapp está inválido';
          }
          break;
        }
    }

    formValid = emailValid && whatsappValid && nomeValid;

    setForm(old => ({
      ...old,
      nomeValid,
      emailValid,
      whatsappValid,
      formValid,
      errorMsg,
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
        <div className='w-1/1 sm:w-1/2 lg:w-1/3 mx-auto pb-3'>

          <label htmlFor='Nome' className='font-bold'>Seu nome:</label>
          <input type='text' id='Nome' name='Nome' className='w-full p-3 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' onChange={onChange} value={form.Nome} />
          {
            !form.nomeValid &&
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 mb-2 rounded relative" role="alert">
              <span className="block sm:inline">{form.errorMsg.nome}</span>
            </div>
          }

          <label htmlFor='Email' className='font-bold'>E-mail:</label>
          <input type='text' id='Email' name='Email' className='w-full p-3 block shadow bg-blue-100 my-2 rounded' placeholder='E-mail' onChange={onChange} value={form.Email} />
          {
            !form.emailValid && !!form.Email &&
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 mb-2 rounded relative" role="alert">
              <span className="block sm:inline">{form.errorMsg.email}</span>
            </div>
          }

          <label htmlFor='Whatsapp' className='font-bold'>Whatsapp:</label>
          <input type='text' id='Whatsapp' name='Whatsapp' className='w-full p-3 block shadow bg-blue-100 my-2 rounded' placeholder='Whatsapp' onChange={onChange} value={form.Whatsapp} />
          {
            !form.whatsappValid && !!form.Whatsapp &&
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 mb-2 rounded relative" role="alert">
              <span className="block sm:inline">{form.errorMsg.whatsapp}</span>
            </div>
          }

          <div className='flex flex-row flex-wrap itens-center b-6 my-5'>
            <label className='font-bold w-1/7'>Avaliação:</label>
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
            {
              !form.notaValid &&
              <div className="bg-red-100 border border-red-400 text-red-700 w-full px-4 py-2 mb-2 rounded relative" role="alert">
                <span className="block sm:inline">{form.errorMsg.nota}</span>
              </div>
            }
          </div>

          <div className='text-center'>
            <button className={'bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' + (!form.formValid && ' opacity-50 cursor-not-allowed')} disabled={!form.formValid} onClick={save}>Salvar</button>
          </div>
        </div>
      }

      {
        success &&
        <div className='w-1/4 mx-auto pb-8'>
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

      {
        form.loading &&
        <div class="overflow-x-hidden overflow-y-auto bg-black bg-opacity-50 fixed inset-0 z-50 outline-none justify-center items-center flex">
          <div class="relative w-auto my-6 mx-auto max-w-6xl">
            <div className="mx-auto loader"></div>
          </div>
        </div>
      }

    </div>
  );
}

export default Pesquisa;
