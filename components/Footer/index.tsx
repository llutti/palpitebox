import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () =>
{
  return (
    <div className='lg:fixed lg:bottom-0 w-full bg-gray-700 p-2'>
      <div className='container flex flex-col md:flex-row items-center justify-between mx-auto text-white text-xs'>
        <Image width={100} height={100} src='/logo_semana_fsm.png' alt='PalpiteBox' />
        <div className='flex flex-row items-center'>
          <div>
            Projeto Desenvolvido por <a className='font-bold' rel='noreferrer' target='_blank' href='https://llutti.dev'>llutti.dev</a>
          </div>
          <a className='pl-3 text-lg' rel='noreferrer' target='_blank' href='https://linkedin.com/in/llutti'>
            <FaLinkedinIn />
          </a>
          <a className='pl-3 text-lg' rel='noreferrer' target='_blank' href='https://github.com/llutti'>
            <FaGithub />
          </a>
        </div>
        <a rel='noreferrer' target='_blank' href='https://devpleno.com'>
          <Image width={100} height={100} src='/logo_devpleno.png' alt='Dev Pleno' />
        </a>
      </div>
    </div>
  );
};

export default Footer;