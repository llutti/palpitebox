import { ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) =>
{
  return (
    <div>
      <Header />
      <div className='container mx-auto p-4'>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;