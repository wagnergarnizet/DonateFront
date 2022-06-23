import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
    return (
        <>
            <main>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <Link to="/about" className='btn btn-primary'>About</Link>
            </nav>
        </>
    );
}