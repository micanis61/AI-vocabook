import { CaretRight } from 'phosphor-react'
import styles from '../../styles/Home.module.css'
import ScreenSize from './screenSize'
export default function WordCategory() {
  const checkLog = ScreenSize
  console.log(checkLog)
  return (
    <div>
      <div>
        <p>Math</p>
        <CaretRight className={styles.minIcon} />
      </div>
    </div>
  )
}