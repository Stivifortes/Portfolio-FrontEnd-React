import React, {useEffect, useState} from 'react'
import './style.css'
import Layout from '../../components/Layout';
import UserIcon from '../../images/svgs/user.svg'
import ilustration from '../../images/svgs/ilustration.svg'

export default function Home() {
    return (
        <Layout>
            <div className='homeContainer'>
                <div className='wrapper'>
                    <div className="left">
                        <p className="webDev">Web Developer</p>
                        <h1 className="myName"><img src={UserIcon} alt="user icon" />Stiven Fortes</h1>
                        <p className="intro">
                        “You can’t connect the dots looking forward; you can only connect them looking backwards. 
                        So you have to trust that the dots will somehow connect in your future.” ― Steve Jobs
                        </p>
                    </div>
                    <div className="right">
                        <img src={ilustration} alt="build responsive design" width="100%"/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
