"use client"
import Link from 'next/link';
import { useEffect } from 'react';
import styles from './styles/home.module.scss';

export default function Page() {

  useEffect(() => {
    localStorage.clear();
  }, [])

  return (
  <div className={styles.main}>
    <div className={styles.hero}>
      <h1 className={styles.hero_header}>Welcome to Grow A Pear</h1>
      <h3 className={styles.hero_subheader}>More info will go here</h3>  
    </div>
    <div className={styles.info}>
      <p className={styles.info_description}>Grow a Pear is currently in its Beta version -- we are crowdsourcing information on plants that you have grown. We are working hard on releasing a full version soon, but in the meantime, please take our survey!</p>
      <Link
        href="/your-garden"
        className={styles.info_start}>
          <p className={styles.info_link}>Get Started</p>
      </Link>
    </div>
  </div>
  )
}