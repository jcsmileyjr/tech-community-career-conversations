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
      <main className={styles.main}>
          <section className={styles.section}>
            <h3 class={styles.appTitle}>Tech Community Conversations</h3>
            <h1>4 Tips on Telling Your Story in an Interview</h1>
            <div>
              <Image
                src={DiamondImage}
                alt="Vercel Logo"
                className={""}
                width={25}
                height={16}
                priority
              />
              <ul>
                <li>Clap Clap</li>
                <p>If you are happy and you know it clap your feet</p>
              </ul>
            </div>
            <div class="footer">
              <div>
                <Image 
                  src={PreviousArrow} 
                  alt="Left Arrow"
                  className={""}
                  width={25}
                  height={16}
                  priority
                />
                <p>Previous</p>
              </div>
              <div>
                <Image 
                  src={NextArrow} 
                  alt="Right Arrow"
                  className={""}
                  width={25}
                  height={16}
                  priority
                />
                <p>Next</p>
              </div>              
            </div>
          </section>
      </main>
    </>
  )
}
