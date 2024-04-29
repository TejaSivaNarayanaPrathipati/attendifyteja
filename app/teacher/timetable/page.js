import Link from 'next/link';
import styles from '../../styles.module.css';

const timetable = () => {
  return (
    <div className={styles.homecontainer}>
      <h1 className={styles.hometext}>Choose your day!</h1>

      <div>
        <h1 className={styles.caveat}>"Timetables are the architects of discipline and organization and it is a blueprint for productivity." </h1>
      </div>

      <div className={styles.teabtpos}>
        <Link href="/teacher/timetable/monday" className={styles.dayBtn}>
          Monday
        </Link>
      </div>

      <div className={styles.teabtpos}>

        <Link href="/teacher/timetable/tuesday" className={styles.dayBtn}>
          Tuesday
        </Link>
      </div>

      <div className={styles.teabtpos}>
        <Link href="/teacher/timetable/wednesday" className={styles.dayBtn}>
          Wednesday
        </Link>
      </div>


      <div className={styles.teabtpos}>

        <Link href="/teacher/timetable/thursday" className={styles.dayBtn}>
          Thursday
        </Link>
      </div>


      <div className={styles.teabtpos}>
        <Link href="/teacher/timetable/friday" className={styles.dayBtn}>
          Friday
        </Link>
      </div>

      <div className={styles.teabtpos}>
        <Link href="/teacher/timetable/saturday" className={styles.dayBtn}>
          Saturday
        </Link>
      </div>

      <div className={styles.teabtpos}>

        <Link href="/teacher/timetable/update" className={styles.dayBtn}>
          Update Time Table
        </Link>
      </div>

      <div className={styles.teabtpos}>
        <Link href="/teacher" className={styles.backbtn}>
          Back
        </Link>
      </div>

    </div>
  );
};

export default timetable;
