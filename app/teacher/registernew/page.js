// pages/register.js

import styles from '../registernew/registerstyle.module.css';

export default function Register() {
  return (
    <div className={styles.container}>
      <h1 className={styles.platypi}>Student Registration</h1>

      <form className={styles.formele}>

        <div className={styles.indi}>
          <label htmlFor="name" >Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className={styles.indi}>
          <label htmlFor="roll_number">Roll Number:</label>
          <input type="number" id="roll_number" name="roll_number" required />
        </div>

        <div className={styles.indi}>
          <label htmlFor="group">Group:</label>
          <input type="text" id="group" name="group" required />
        </div>

        <div className={styles.indi}>
          <label htmlFor="photo">Photo:</label>
          <input type="file" id="photo" name="photo" accept="image/*" required />
        </div>


        <div className={styles.indi}>
          <button type="submit" className={styles.homeBtn}>Register</button>
        </div>

      </form>
    </div>
  );
}
