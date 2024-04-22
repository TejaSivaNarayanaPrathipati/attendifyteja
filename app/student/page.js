// pages/student.js

import Link from 'next/link';
import styles from '../styles.module.css';

const StudentPage = () => {
  return (
    <div className={styles.homecontainer}>
      <h1 className={styles.hometext}>Welcome Student!</h1>
      {/* Add content specific to the student page */}
      <Link href="/student/timetable" className={styles.homeBtn}>
        TimeTable
      </Link>
      <Link href="/student/checkattendance" className={styles.homeBtn}>
        Check Attendance
      </Link>
      <Link href="/home" className={styles.homeBtn}>
        Go back to Home
      </Link>
    </div>
  );
};

export default StudentPage;
