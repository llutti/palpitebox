import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () =>
{
  return (
    <div className='lg:fixed lg:bottom-0 w-full bg-gray-700 p-2'>
      <div className='container flex flex-col md:flex-row items-center justify-between mx-auto text-white text-xs'>
        <img className='inline p-1' src='/logo_semana_fsm.png' alt='PalpiteBox' />
        <div className='flex flex-row items-center'>
          <div>
            Projeto Desenvolvido por <span className='font-bold'>llutti</span>
          </div>
          <a className='pl-3 text-lg' rel='noreferrer' target='_blank' href='https://linkedin.com/in/llutti'>
            <FaLinkedinIn />
          </a>
          <a className='pl-3 text-lg' rel='noreferrer' target='_blank' href='https://github.com/llutti'>
            <FaGithub />
          </a>
        </div>
        <img className='inline p-1' src='/logo_devpleno.png' alt='PalpiteBox' />
      </div>
    </div>
  );
}

export default Footer;