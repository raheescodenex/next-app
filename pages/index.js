import Head from 'next/head'
import Image from 'next/image'
import ArticleList from '../components/ArticleList'
import styles from '../styles/Layout.module.css'

export default function Home({articles}) {
  console.log(articles)
  return (
    <div className={styles.container}>
      <Head>
        <title>The Next APp</title>
        <meta name="description" content="Web Design Kerala" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <ArticleList articles={articles} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}


export const getStaticProps = async () => {
  
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json();

  return{
    props : {articles}
  }
}