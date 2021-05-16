import React from 'react'
import './style.css'
import image from '../../images/logo.jpg'

export default function Project(props) {
    return (
        <div className='projectContainer'>
            <div>
                <img src={image} alt="" width='150' height='150' />
            </div>
            <p>Project:</p>
            <p>Description:</p>
            <p>URL: </p>
        </div>
    )
}
