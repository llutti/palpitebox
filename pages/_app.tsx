import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../css/styles.css';

const App = ({ Component, pageProps }: AppProps) =>
{
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
