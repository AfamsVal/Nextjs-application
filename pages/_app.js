import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <title>Create Next App..</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
          </Head>
    <Header />
    <Component {...pageProps} />
    </>)
}

export default MyApp
