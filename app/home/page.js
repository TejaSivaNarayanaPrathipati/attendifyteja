// pages/index.js

import Link from 'next/link';
import styles from '../styles.module.css';
import Homeimage from '..//../Assets/Home Page.png';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className={styles.homecontainer}>

      <div>

      <h1 className={styles.hometext}>Welcome!</h1>

      </div>

      <div>
      <h1 className={styles.caveat}>"Attending class isn't just about being present; it's about actively engaging in the journey of learning."</h1>
      </div>
      

      <div className={styles.homebtpos}>

        <Link href="/teacher" className={styles.homeBtn}>Teacher</Link>
      
        {/* <Link href="/student" className={styles.homeBtn} >Student</Link> */}

      </div>

      <div className={styles.homebtpos}>

        {/* <Link href="/teacher" className={styles.homeBtn}>Teacher</Link> */}
      
        <Link href="/student" className={styles.homeBtn} >Student</Link>

      </div>


      <div>

      <Image src={Homeimage} width={1024} alt="Homepageimage"  className={styles.homimgpos} />

      </div>

     

    </div>
  );
};

export default HomePage;
