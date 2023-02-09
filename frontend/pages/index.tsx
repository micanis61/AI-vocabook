import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/footer'
import Link from 'next/link';
export default function index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ホーム</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <div className={styles.boxBackground} >
        <Link className={styles.hoge} href="/study" style={{textDecoration:'none'}}>
          <div className={styles.progressCircle}>
            <p className={styles.progressNumber}>80%</p>
          </div>
            <p className={styles.progressTitle}>数学A</p>
        </Link>
      </div>
      <Footer />
    </div>
  )
}