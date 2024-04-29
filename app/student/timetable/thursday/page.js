import Link from 'next/link';
import styles from '../../../styles.module.css';

const basic = () => {
  return (
    <div className={styles.homecontainer}>
      <h1 className={styles.hometext}> Thursday</h1>

      <div className={styles.teabtpos}>
        <Link href="/student/timetable" className={styles.backbtn}>
          Back
        </Link>
      </div>

    </div>
  );
};

export default basic;
