import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Blog from '../components/Blog';

function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Blog />
        </div>
    );
}

export default Home;