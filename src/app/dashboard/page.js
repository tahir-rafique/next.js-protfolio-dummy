'use client'

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'

const Dashboard = () => {

    // const [data, setData] = useState([])
    // const [err, setErr] = useState(false)
    // const [isLoading, setIsLoading] = useState(false)


    // SWR Next.js
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR(`https://jsonplaceholder.typicode.com/posts`, fetcher)

    // useEffect(() => {

    //     const getData = async () => {
    //         setIsLoading(true)
    //         const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //             cache: 'no-store',
    //         })

    //         if (!res.ok) {
    //             setErr(true)
    //         }

    //         const data = await res.json()
    //         setData(data);
    //         setIsLoading(false)

    //     }

    //     getData();

    // }, [])


    console.log(data,"dashboard page data")




    return (

        <div className={styles.dashboard}>Dashboard</div>
    )
}

export default Dashboard;