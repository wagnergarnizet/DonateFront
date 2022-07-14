import * as React from 'react';
import { Link } from 'react-router-dom';
import imgLogo from './../../images/admin/logo.png';

export default function Home(){
    return (
        <section id="login">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 offset-md-4'>
                        <div className='bg-card'>
                            <img src={imgLogo} alt="Logo" className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}