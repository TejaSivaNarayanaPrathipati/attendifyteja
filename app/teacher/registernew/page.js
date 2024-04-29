// pages/register.js

import styles from '../../styles.module.css';
import Link from 'next/link';

export default function Register() {
  return (
    <div className={styles.homecontainer}>

      <div>

        <h1 className={styles.hometext}>Student Registration</h1>

      </div>

      <div className={styles.regbtpos}>

        <form >

          <div className={styles.teabtpos}>
            <label htmlFor="name" >Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className={styles.teabtpos}>
            <label htmlFor="roll_number">Roll Number:</label>
            <input type="number" id="roll_number" name="roll_number" required />
          </div>

          <div className={styles.teabtpos}>
            <label htmlFor="group">Group:</label>
            <input type="text" id="group" name="group" required />
          </div>

          <div className={styles.teabtpos}>
            <label htmlFor="photo">Photo:</label>
            <input type="file" id="photo" name="photo" accept="image/*" required />
          </div>


          <div className={styles.teabtpos}>
            <button type="submit" className={styles.subBtn}>Register</button>
          </div>

        </form>

        <div className={styles.teabtpos}>
          <Link href="/teacher" className={styles.backbtn2}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
