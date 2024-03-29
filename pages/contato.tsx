import Link from 'next/link';

import SEO from '../components/SEO';

const Contato = () =>
{
  return (
    <div>
      <SEO title='Contato' />
      <h4>Contato</h4>
      <div>
        <Link href='/'>
          Home
        </Link>
      </div>
    </div>
  );
};

export default Contato;
