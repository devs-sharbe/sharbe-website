import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from '@/hook/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default MyApp;
