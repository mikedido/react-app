import React, { useEffect, useState } from 'react';
import './Page1.css';
import AxiosService from '../../utils/services/AxiosService';
import Footer from '../Footer/Footer';

const Page1 = (props) => {
  
    const [joke, setJoke] = useState('');

    //get jokes
    useEffect(() => {
        AxiosService.getJokes().then((response) => {
            setJoke(response.data);
        }).catch((error) => {
            console.log(error);
          })
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        {
          joke === '' &&
          <p>...</p>
        }
        {
          joke !== '' &&
          <p>{joke.value.joke}</p>
        }
        <p>
          Page 1.
        </p>
      </header>
      <Footer/>
    </div>
  );
}

export default Page1;