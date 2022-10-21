import React, { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache, Global } from '@emotion/react';
import theme, { globalStyle } from 'src/theme';
import createEmotionCache from 'src/createEmotionCache';
import 'public/fonts/styles.css';

import TagManager from 'react-gtm-module';

// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
    TagManager.initialize({ gtmId: 'G-SFCPQYSLHY' });
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Global styles={globalStyle} />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* <GoogleReCaptchaProvider reCaptchaKey=""> */}
        <Component {...pageProps} />
        {/* </GoogleReCaptchaProvider> */}
      </ThemeProvider>
    </CacheProvider>
  );
}
