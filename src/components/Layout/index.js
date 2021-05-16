import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function Layout(props) {
    return (
        <div className='main'>
            <Header/>
            <div className='MainContent'>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}
