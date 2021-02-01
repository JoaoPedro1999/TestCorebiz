import React from 'react';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';
import AppProvider from '@/hooks';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <AppProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppProvider>
  </ThemeProvider>
);

export default MyApp;
