import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';
import Image from 'next/image';



async function getData() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'no-store'
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data from JSON-Placeholder API')
    }

    return res.json();
}


const Blog = async () => {

    const data = await getData();
    // console.log(data, 'data of blogs');

    return (
        <div className={styles.mainContainer}>

            {data.map((item) => (
                <Link key={item.id} href='/blog/testId' className={styles.container}>

                    <div className={styles.imageContainer}>
                        <Image
                            src='/1.png'
                            alt='no'
                            height={400}
                            width={350}
                            className={styles.image}
                        />
                    </div>

                    <div className={styles.content} >
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.body}</p>
                    </div>

                </Link>

            ))}

        </div>
    )
}

export default Blog;