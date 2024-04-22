import Link from 'next/link';
import styles from '../../styles.module.css';

const timetable = () => {
  return (
    <div className={styles.homecontainer}>
      <h1 className={styles.hometext}>Choose your day!</h1>
      {/* Add content specific to the teacher page */}
      <Link href="/teacher/timetable/monday" className={styles.homeBtn}>
        Monday
      </Link>

      <Link href="/teacher/timetable/tuesday" className={styles.homeBtn}>
        Tuesday
      </Link>

      <Link href="/teacher/timetable/wednesday" className={styles.homeBtn}>
        Wednesday
      </Link>


      <Link href="/teacher/timetable/thursday" className={styles.homeBtn}>
        Thursday
      </Link>


      <Link href="/teacher/timetable/friday" className={styles.homeBtn}>
        Friday
      </Link>


      <Link href="/teacher/timetable/saturday" className={styles.homeBtn}>
        Saturday
      </Link>

      <Link href="/teacher/timetable/update" className={styles.homeBtn}>
        Update Time Table
      </Link>
      
      <Link href="/teacher" className={styles.homeBtn}>
        Go back to Teacher
      </Link>
    </div>
  );
};

export default timetable;
