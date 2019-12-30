import React from 'react';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
    render() {
        return <h1>Bonjour, {this.props.name}</h1>;
      }
}


function Home() {
    return (
        <div className="App">
        <header className="App-header">
          
            <p>Hello world.</p> 
            <Welcome name="Mahdi" />
          
          <Link to="/page1">to page 1</Link>
        </header>
        <Footer/>
      </div>
    );
  }
  
export default Home;