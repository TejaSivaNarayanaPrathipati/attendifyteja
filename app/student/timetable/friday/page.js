import Link from 'next/link';
import styles from '../../../styles.module.css';

const basic = () => {
  return (
    <div className={styles.homecontainer}>
      <h1 className={styles.hometext}> Friday</h1>

      <Link href="/student/timetable" className={styles.homeBtn}>
        Go back to TimeTable
      </Link>
    </div>
  );
};

export default basic;
