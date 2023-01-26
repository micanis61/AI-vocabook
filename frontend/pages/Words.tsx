import Head from 'next/head'
import { House, PencilSimpleLine, Books, ChartPieSlice } from 'phosphor-react'
import TakePhoto from './components/camera'
import styles from '../styles/Home.module.css'

export default function Words() {
  return (<div>
    <Head>
      <title>単語登録</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <p>hello</p>
      <TakePhoto />
    </div>
    <footer className={styles.footer}>
      <House size={32} />
      <PencilSimpleLine size={32} />
      <Books size={32} />
      <ChartPieSlice size={32} />
    </footer>
  </div>)

}
