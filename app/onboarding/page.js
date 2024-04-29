import Link from 'next/link';
import styles from '../styles.module.css';
import BoardingPagetextImage from '../../Assets/BoardingPagetext.png';
import Image from 'next/image';

export default function OnboardingButton() {
  return (
    <div>
      <Image src={BoardingPagetextImage} width={800} alt="Boardingpageimage" className={styles.boardingpageimg}
      />
      <Link href="/home">
        <button className={styles.getStartedBtn}>
          Get Started
        </button>
      </Link>
    </div>
  );
}
