import React, { useState } from 'react';
import { GlobalStyle } from './components/styles/GlobalStyle';
import URLForm from './components/URLForm';
import ShortenedURL from './components/ShortenedURL';
import Hero from './components/Hero';
import axios from 'axios';

const App = () => {

  const[url, setUrl] = useState('');
  const[hash, setHash] = useState('');
  const[shortenedURL, setShortenedURL] = useState('');

  const onSubmit = () =>{
    // Fetch API to create new URL
    const {data} = axios({
      method: 'post',
      url: 'http://localhost:8080/hashURL',
      data: {
        url: url
      }
    })
    .then(response => setShortenedURL(response.data));
    console.log(shortenedURL)
  }

  return (
    <>
      <GlobalStyle/>
      <Hero/>
      <URLForm
        handleURL={setUrl}
        onSubmit={onSubmit}
      />
      <ShortenedURL/>
    </>
  );
}

export default App;
