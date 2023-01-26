import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/footer'
import TakePhoto from './components/camera'
export default function Words() {
  return (<div>
    <Head>
      <title>登録</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <p>ここは登録です</p>
      <TakePhoto />
    </div>
    <Footer />
  </div>)

}
