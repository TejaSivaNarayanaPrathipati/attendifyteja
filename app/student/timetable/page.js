import Link from 'next/link';
import styles from '../../styles.module.css';

const timetable = () => {
  return (
    <div className={styles.homecontainer}>
      <h1 className={styles.hometext}>Choose your day!</h1>
      {/* Add content specific to the teacher page */}
      <Link href="/student/timetable/monday" className={styles.homeBtn}>
        Monday
      </Link>

      <Link href="/student/timetable/tuesday" className={styles.homeBtn}>
        Tuesday
      </Link>

      <Link href="/student/timetable/wednesday" className={styles.homeBtn}>
        Wednesday
      </Link>


      <Link href="/student/timetable/thursday" className={styles.homeBtn}>
        Thursday
      </Link>


      <Link href="/student/timetable/friday" className={styles.homeBtn}>
        Friday
      </Link>


      <Link href="/student/timetable/saturday" className={styles.homeBtn}>
        Saturday
      </Link>

      <Link href="/student/timetable/update" className={styles.homeBtn}>
        Update Time Table
      </Link>
      
      <Link href="/student" className={styles.homeBtn}>
        Go back to Student
      </Link>
    </div>
  );
};

export default timetable;