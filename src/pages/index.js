import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import DiamondImage from '../assets/diamond-icon-blue.png'
import PreviousArrow from '../assets/PolygonLeft.png'
import NextArrow from '../assets/PolygonRight.png'
//import fetch from 'node-fetch';
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [content, setContent] = useState("loading");
  const [currentArticle, setCurrentArticle] = useState(0);

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => {
        setContent(data);
      })
  }, []);

  // When the user clicks the Next button, the next story is displayed
  const nextArticle = () => {
    if((content.length -1) === (currentArticle)){
      setCurrentArticle(0);
    }else{
      setCurrentArticle(currentArticle + 1);
    }
  }

  // When the user clicks the Previous button, the story before the current is displayed
  const previousArticle = () => {
    if(currentArticle === 0){
      setCurrentArticle(content.length - 1);
    }else{
      setCurrentArticle(currentArticle - 1);
    }
  }
  
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
              <h3 className={`${styles.appTitle} ${styles.primaryTextColorBold}`}>Tech Community Conversations</h3>
              <h1 className={`${styles.primaryTextColorBold} ${styles.pageTitle}`}>{content[currentArticle].title}</h1>
              <section className={styles.section}>
                {content === 'loading' &&
                  <p>loading</p>
                }

                {content !== 'loading' &&
                  <p className={`${styles.content} ${styles.introText} ${styles.primaryTextColorLight}`}>{content[currentArticle].intro}</p>
                }

                {content !== 'loading' &&
                  <ul className={styles.content}>
                  {content[currentArticle].listOfBulletPoints.map((bulletpoint, index) => (
                    <div key={index} className={`${styles.bullet}`}>
                      <div>
                        <Image
                          src={DiamondImage}
                          alt="Vercel Logo"
                          className={""}
                          width={25}
                          height={16}
                          priority
                        />

                      </div>
                      <div>
                        <li className={`${styles.contentTitle} ${styles.primaryTextColorBold}`}>{bulletpoint.title}</li>
                        <p className={`${styles.contentText} ${styles.primaryTextColorLight}`}>{bulletpoint.bulletContent}</p>
                      </div>
                    </div>
                  ))
                  }
                  </ul>

                }
              </section>
            </div>
            <footer className={styles.footer}>
              <div className={styles.footerDirections} onClick={() => previousArticle()}>
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
              <button type="button" className={styles.footerMenuButton}>
                <Link href="/menu">MENU</Link>
              </button>
              <div className={styles.footerDirections} onClick={() => nextArticle()}>
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