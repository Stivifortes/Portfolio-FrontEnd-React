import React from 'react';
import './style.css';
import Layout from '../../components/Layout';
import Form from '../../components/Form'

export default function Admin() {
    return (
        <Layout>
            <div className='adminContainer'>
                <div>
                    <h2 style={{textAlign: 'center', margin:'25px'}}>Create A New Project</h2>
                    <div>
                    <Form/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
