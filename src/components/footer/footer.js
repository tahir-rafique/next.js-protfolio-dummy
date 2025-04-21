'use client'

import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image';

const ywer = new Date();
let year = ywer.getFullYear()
console.log(year, 'hello jee...');

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div>{year} Tahir 👩‍💻 with 💖</div>
            <div className={styles.socialicons}>

                <Image
                    src='/1.png'
                    alt='facebook'
                    width={20}
                    height={20} 

                />
                <Image
                    src='/2.png'
                    alt='IG'
                    width={20}
                    height={20}
                />

                <Image
                    src='/3.png'
                    alt='Twt'
                    width={20}
                    height={20}
                />

                <Image
                    src='/4.png'
                    alt='Twt'
                    width={20}
                    height={20}
                />

            </div>
        </div>
    )
}

export default Footer;