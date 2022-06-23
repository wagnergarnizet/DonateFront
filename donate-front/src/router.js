import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

export default function Rotas(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
        </Routes>
    );
}
  
function About() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
                    That feels like an existential question, don't you
                    think?
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}