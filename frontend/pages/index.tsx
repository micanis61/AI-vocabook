import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/footer'
export default function index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ホーム</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <div>
        <p className={styles.p1}>ホームです</p>
      </div>
      <Footer />
    </div>
  )
}