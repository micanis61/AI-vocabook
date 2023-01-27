import { House, PencilSimpleLine, Books, ChartPieSlice } from 'phosphor-react';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

export default function Footer () {
    return (
        <footer className={styles.footer}>
        <Link href="/"><House className={styles.mainIcon} size={20} /></Link>
        <Link href="/study"><PencilSimpleLine className={styles.mainIcon} size={20} /></Link>
        <Link href="/words"><Books className={styles.mainIcon} size={20} /></Link>
        <Link href="/progress"><ChartPieSlice className={styles.mainIcon} size={20} /></Link>
        
      </footer>
    )
}