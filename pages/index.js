import Head from 'next/head'
import Header from '../comps/header'
import Footer from '../comps/footer'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja || Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Header />
        <h2 className={styles.title}>hello</h2>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus earum, velit nisi vitae nobis enim possimus minus quis doloribus.</p>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus earum, velit nisi vitae nobis enim possimus minus quis doloribus.</p>
        <Link className={styles.btn} href="/ninjas"><a>to see ninja List</a></Link>
        <Footer />
      </div>
    </>
  )
}
