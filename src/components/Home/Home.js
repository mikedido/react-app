import React from 'react';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="App">
        <header className="App-header">
          <p>
            Hello world.
          </p>
          <Link to="/page1">to page 1</Link>
        </header>
        <Footer/>
      </div>
    );
  }
  
export default Home;