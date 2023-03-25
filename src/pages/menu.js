import Link from "next/link"
import Head from "next/head"
import styles from '@/styles/Menu.module.css'
import { useState, useEffect } from 'react'

const Menu = () => {
    const [content, setContent] = useState("loading");
  
    useEffect(() => {
      fetch('/api/hello')
        .then((res) => res.json())
        .then((data) => {
          setContent(data);
        })
    }, []);

    console.log(content)
    return(
        <>
            <Head>
                <title>Tech Community Career Conversations</title>
                <meta name="description" content="Community generated career advice" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>  
            <div className={styles.page}>
                <main className={styles.main}>
                    <h3 className={`${styles.appTitle} ${styles.primaryTextColorBold}`}>Tech Community Conversations</h3>
                    <h2 className={`${styles.appTitle} ${styles.primaryTextColorBold}`}>List of Articles</h2>

                    {content === 'loading' &&
                        <p>loading</p>
                    }

                    {content !== 'loading' && content.map((article, index) => (
                        <Link href="/" id={index}>{article.title}</Link>
                    ))

                    }
                </main>

            </div>     
        </>
    )
}

export default Menu