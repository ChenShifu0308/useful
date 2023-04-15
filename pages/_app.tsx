import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithI18Next } from 'ni18n'
import { ni18nConfig } from '../ni18n.config'

const MyApp = ({ Component, pageProps }: AppProps) =>
  <>
    <ThemeProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1"
        ></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>


export default appWithI18Next(MyApp, ni18nConfig)
