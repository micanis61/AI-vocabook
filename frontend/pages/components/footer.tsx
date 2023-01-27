import { House, PencilSimpleLine, Books, ChartPieSlice } from 'phosphor-react';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

export default function Footer () {
    return (
        <footer className={styles.footer}>
        <Link href="/"><House size={32} /></Link>
        <Link href="/study"><PencilSimpleLine size={32} /></Link>
        <Link href="/words"><Books size={32} /></Link>
        <Link href="/progress"><ChartPieSlice size={32} /></Link>
      </footer>
    )
}