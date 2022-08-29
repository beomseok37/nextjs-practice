import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';

import { global } from 'src/styles/global';
import { theme } from 'src/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
