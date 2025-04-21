import Image from 'next/image';
import styles from './page.module.css';
// import heropng from '../../public/hero.png'   // this is alos correct ✅
import heropng from '@/../public/hero.png'
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className={styles.contaier}>

      <div className={styles.item}>
        <h1 className={styles.title}>Better desing for your digital products.</h1>
        <p className={styles.desc}> Turning your Idea into Reality. We bring together the teams from the
          global tech industry.</p>

        <Button url='/portfolio' text='See Our Works' />
      </div>

      <div className={styles.item} >
        <Image src={heropng} alt='hero' className={styles.imgs} />
      </div>

    </div>
  );
}
