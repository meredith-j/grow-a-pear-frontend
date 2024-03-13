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
      <h3 className={styles.hero_subheader}>Budding Beta: Help Us Blossom! 🌱 Take Our Plant Survey!</h3>  
    </div>
    <div className={styles.info}>
      <p className={styles.info_description}>When I moved into my last apartment, complete with some cute outdoor space, I couldn't wait to plan my first garden. I quickly realized it was going to be a bigger struggle than I'd originally thought to get any good information. There are no websites with accurate & easy-to-read data on what plants you can grow. Bloggers will write about their own experiences gardening, but the plants they grow are very specific to the climate & sun exposure their plants are getting. Alternatively, there are lots of plant stores – but all of them are built with the purpose of selling you a product, not necessarily providing you with the information you need to choose the perfect plants for you.</p>
      <p className={styles.info_description}>Enter Grow A Pear, your laid-back garden guru. We're determined to make gardening accessible to everyone, from first-timers to seasoned pros. No drama, just straightforward info on plants that'll thrive where you live. Because no one should have to kill a dozen plants before they figure out what'll flourish. Let's make your space lush and maybe spill a little floral tea along the way.</p>
      <Link
        href="/your-garden"
        className={styles.info_start}>
          <p className={styles.info_link}>Get Started</p>
      </Link>
    </div>
  </div>
  )
}