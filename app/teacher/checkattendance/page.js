import styles from '../registernew/registerstyle.module.css';

export default function Register() {
  return (
    <div className={styles.container}>
      <h1 className={styles.platypi}>Student Attendance Check</h1>

      <form className={styles.formele}>

        <div className={styles.indi}>
          <label htmlFor="Roll No." >Roll No.:</label>
          <input type="text" id="Roll No" name="name" required />
        </div>

        <div className={styles.indi}>
          <button type="submit" className={styles.homeBtn}>Register</button>
        </div>

      </form>
    </div>
  );
}

