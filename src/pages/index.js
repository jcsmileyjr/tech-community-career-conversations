import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import DiamondImage from '../assets/diamond-icon-blue.png'
import PreviousArrow from '../assets/PolygonLeft.png'
import NextArrow from '../assets/PolygonRight.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Tech Community Career Conversations</title>
        <meta name="description" content="Community generated career advice" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
          <main className={`${styles.main}`}>
            <div>
              <h3 class={`${styles.appTitle} ${styles.primaryTextColorBold}`}>Tech Community Conversations</h3>
              <h1 class={`${styles.primaryTextColorBold} ${styles.pageTitle}`}>4 Tips on Telling Your Story in an Interview</h1>
              <section className={styles.section}>
                <Image
                  src={DiamondImage}
                  alt="Vercel Logo"
                  className={""}
                  width={25}
                  height={16}
                  priority
                />
                <ul className={styles.content}>
                  <li className={`${styles.contentTitle} ${styles.primaryTextColorBold}`}>Code Daily</li>
                  <p className={`${styles.contentText} ${styles.primaryTextColorLight}`}>The number one way to learn anything is to practice frequently.</p>
                </ul>
              </section>
            </div>
            <footer class={styles.footer}>
              <div className={styles.footerDirections}>
                <Image 
                  src={PreviousArrow} 
                  alt="Left Arrow"
                  className={""}
                  width={30}
                  height={30}
                  priority
                />
                <p className={`${styles.footerArrowTitle} ${styles.primaryTextColorBold}`}>Previous</p>
              </div>
              <div className={styles.footerDirections}>
                <Image 
                  src={NextArrow} 
                  alt="Right Arrow"
                  className={""}
                  width={30}
                  height={30}
                  priority
                />
                <p className={`${styles.footerArrowTitle} ${styles.primaryTextColorBold}`}>Next</p>
              </div>              
            </footer>
          </main>
      </div>
    </>
  )
}
