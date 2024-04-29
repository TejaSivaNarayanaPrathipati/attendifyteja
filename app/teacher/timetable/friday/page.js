import Link from 'next/link';
import styles from '../../../styles.module.css';

const basic = () => {
  return (
    <div className={styles.homecontainer}>
      <h1 className={styles.hometext}> Friday</h1>

      <div className={styles.teabtpos}>
        <Link href="/teacher/timetable" className={styles.backbtn}>
          Back
        </Link>
      </div>

    </div>
  );
};

export default basic;
