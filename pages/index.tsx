import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import VideoGrid from '../components/VideoGrid/VideoGrid'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <VideoGrid />

      </main>
    </div>
  )
}

export default Home
