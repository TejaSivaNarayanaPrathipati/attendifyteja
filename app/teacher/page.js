// pages/teacher.js

import Link from 'next/link';
import styles from '../styles.module.css';
import teaimage from '..//../Assets/Teacher Screen.png';
import Image from 'next/image';

const TeacherPage = () => {
  return (
    <div className={styles.homecontainer}>

      <div>
        <h1 className={styles.hometext}>Welcome Teacher!</h1>
      </div>

      <div>
        <h1 className={styles.caveat}>"The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires." </h1>
      </div>

      <div className={styles.teabtpos}>

        <Link href="/teacher/timetable" className={styles.teaBtn}>
          TimeTable
        </Link>

      </div>

      <div className={styles.teabtpos}>

        <Link href="/teacher/checkattendance" className={styles.teaBtn}>
          Check Attendance
        </Link>

      </div>


      <div className={styles.teabtpos}>

        <Link href="/teacher/snapattendance" className={styles.teaBtn}>
          Snap Attendance
        </Link>

      </div>

      <div className={styles.teabtpos}>

        <Link href="/teacher/registernew" className={styles.teaBtn}>
          Register new student
        </Link>

      </div>

      <div className={styles.teabtpos}>

        <Link href="/home" className={styles.backbtn}>
          Home
        </Link>

      </div>

      <div>

      <Image src={teaimage} width={1024} alt="Teacherpageimage"  className={styles.teaimgpos} />

      </div>



    </div>
  );
};

export default TeacherPage;
