// pages/teacher.js

import Link from 'next/link';
import styles from '../styles.module.css';

const TeacherPage = () => {
  return (
    <div className={styles.homecontainer}>
      <h1 className={styles.hometext}>Welcome Teacher..!</h1>
      {/* Add content specific to the teacher page */}
      <Link href="/teacher/timetable" className={styles.homeBtn}>
        TimeTable
      </Link>
      <Link href="/teacher/checkattendance" className={styles.homeBtn}>
        Check Attendance
      </Link>
      <Link href="/teacher/snapattendance" className={styles.homeBtn}>
        Snap Attendance
      </Link>
      <Link href="/teacher/registernew" className={styles.homeBtn}>
        Register new student
      </Link>
      <Link href="/home" className={styles.homeBtn}>
        Go back to Home
      </Link>
    </div>
  );
};

export default TeacherPage;
