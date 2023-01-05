import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Greeting from './Greeting';

const API_URL = 'http://localhost:3000/api/v1/messages';

function getApiData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {

  const [greetings, setGreetings] = useState([])

  useEffect(() => {
    let mounted = true;
    getApiData().then((items) => {
      if (mounted) {
        setGreetings(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div >
      <h1>Greetings</h1>
      <Greeting  greetings = {greetings}/>
    </div>
  );
}

export default App;
