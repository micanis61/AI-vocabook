import React from 'react'
import Head from 'next/head'
import Footer from './components/footer'
import TakePhoto from './components/camera'
import FileUploadSingle from './components/fileUploadSingle'
import styles from '../styles/Home.module.css'

export default function Words() {
  return (
    <div>
        <Head>
            <title>登録</title>
            <meta name="viewport" content="width=device-width,initial-scale=1" />
        </Head>
    <div>
        <p className={styles.p1}>ここは登録です</p>
        <TakePhoto />
    </div>
        <Footer />
    </div>
  )
}