import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { House, PencilSimpleLine, Books, ChartPieSlice } from 'phosphor-react'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>単語登録</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p>あいうえお</p>
      </div>

      <footer className={styles.footer}>
        <House size={32} />
        <PencilSimpleLine size={32} />
        <Link href="/Words"><Books size={32} /></Link>
        <ChartPieSlice size={32} />
      </footer>
    </div>
  )
}
