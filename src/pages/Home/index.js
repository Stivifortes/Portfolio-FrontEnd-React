import React, {useEffect, useState} from 'react'
import './style.css'
import Layout from '../../components/Layout'

export default function Home() {

    const [api, setApi] = useState('')
    useEffect(() => {
        fetch('http://localhost:8080')
        .then(response => response.json())
        .then(data => console.log("API:", data.message))
    }, [])
    return (
        <Layout>
            <div className='homeContainer'>
            Home jdhkfadj <br/>
            </div>
        </Layout>
    )
}
