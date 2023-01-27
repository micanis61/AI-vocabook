import Head from 'next/head'
import WordCategory from './components/wordCategory'
import Footer from './components/footer'
import styles from '../styles/Home.module.css'
export default function Study() {
  return (
    <div className={styles.container}>
      <Head>
        <title>学習</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p className={styles.p1}>ここは学習です</p>
        <WordCategory />
      </div>
      <Footer />
    </div>
  )
}