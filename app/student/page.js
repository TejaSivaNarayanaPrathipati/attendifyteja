// pages/student.js

import Link from 'next/link';
import styles from '../styles.module.css';
import stuimage from '../../Assets/student page.png';
import Image from 'next/image';

const StudentPage = () => {
  return (
    <div className={styles.homecontainer}>
      <h1 className={styles.hometext}>Welcome Student!</h1>

      <div>
        <h1 className={styles.caveat3}>"In the symphony of education, let each note of knowledge resonate within your soul." </h1>
      </div>

      <div className={styles.teabtpos}>
        <Link href="/student/timetable" className={styles.teaBtn}>
          TimeTable
        </Link>
      </div>

      <div className={styles.teabtpos}>
        <Link href="/student/checkattendance" className={styles.teaBtn}>
          Check Attendance
        </Link>
      </div>

      <div className={styles.teabtpos}>
        <Link href="/home" className={styles.backbtn}>
          Home
        </Link>
      </div>

      <div>

        <Image src={stuimage} width={1024} alt="Studentpageimage" className={styles.teaimgpos} />

      </div>


    </div>
  );
};

export default StudentPage;
