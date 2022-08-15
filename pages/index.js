import Head from 'next/head'
import Image from 'next/image'
import Cards from '../component/cards'
import Des from '../component/des'
import Footer from '../component/Footer'
import Main from '../component/main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <>
  <div className={styles.main}>
    <Head>
      <title>Hello World</title>
    </Head>
    <div className={styles.circle}></div>
    <Image
      src="/yoga.png"
      alt="Picture or the author"
      height={600}
      width={800}
      className={styles.landimg}
    />
    <Main  className={styles.head}/>
    <Des />
  </div>
  <Cards />
  <Footer/>
  </>)
}
