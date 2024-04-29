import styles from '../../styles.module.css';
import Link from 'next/link';
import checkimage from '../../../Assets/checkatt.png';
import Image from 'next/image';

export default function Register() {
  return (
    <div className={styles.homecontainer}>
      
      <div>
      <h1 className={styles.hometext}>Check Attendance</h1>
      </div>

      <form className={styles.formbg}>

        <div className={styles.teabtpos}>
          <label className={styles.formele} htmlFor="Roll No." >Student Roll Number: </label>
          <input type="text" id="Roll No" name="name" required className={styles.inputbox} />
        </div>

        <div className={styles.teabtpos}>
          <button type="submit" className={styles.subBtn}>Submit</button>
        </div>

      </form>

      <div className={styles.teabtpos}>

        <Link href="\teacher" className={styles.backbtn2}>
          Back
        </Link>

      </div>

      <div>

      <Image src={checkimage} width={1024} alt="checkpageimage"  className={styles.checkimgpos} />

      </div>


    </div>
  );
}

