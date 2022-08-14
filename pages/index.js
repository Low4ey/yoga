import Head from 'next/head'
import Image from 'next/image'
import Des from '../component/des'
import Main from '../component/main'
import Nav from '../component/nav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (<div className={styles.main}>
    <Image
      src="/yoga.jpeg"
      alt="Picture or the author"
      layout='fill'
      objecFit='cover'
      objectPosition=' center '
      className={styles.landimg}
    />
    <Nav />
    <Main />
    <Des />
  </div>)
}
