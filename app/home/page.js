// pages/index.js

import Link from 'next/link';
import styles from '../styles.module.css';

const HomePage = () => {
  return (
    <div className={styles.homecontainer}>
      <h1 className={styles.hometext}>Welcome to the Home Page!</h1>
      <div>
        <Link href="/teacher" className={styles.homeBtn}>Teacher</Link>
      </div>
      <div>
        <Link href="/student" className={styles.homeBtn}>Student</Link>
      </div>
    </div>
  );
};

export default HomePage;
