import React from 'react';
import './App.css';
import Footer from '../Footer/Footer';

class Welcome extends React.Component {
  render() {
    return <h1>Bonjour, {this.props.name}</h1>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="Mahdi" />
        <p>
          Hello world.
        </p>
        
      </header>
      <Footer/>
    </div>
  );
}

export default App;