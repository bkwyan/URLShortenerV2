import React, { useState } from 'react';
import { GlobalStyle } from './components/styles/GlobalStyle';
import URLForm from './components/URLForm';
import ShortenedURL from './components/ShortenedURL';
import Hero from './components/Hero';
import axios from 'axios';

const App = () => {

  const[url, setURL] = useState([]);
  const[shortenedURLs, setShortenedURL] = useState([]);

  const onSubmit = (url) =>{
    addURL(url);
    // Fetch API to create new URL
    const {data} = axios({
      method: 'post',
      url: 'http://localhost:8080/hashURL',
      data: {
        url: url
      }
    })
    .then(response => addShortenedURL(response.data));
    console.log(shortenedURLs)
  }

  const addURL = (state, url) => {
    setURL(...state, url);
  }

  const addShortenedURL = (state, shortenedURL) => {
    setShortenedURL(...state, shortenedURL);
  }

  return (
    <>
      <GlobalStyle/>
      <Hero/>
      <URLForm
        onSubmit={onSubmit}
      />
      {shortenedURLs.map((shortenedURL, i) => {
        <ShortenedURL shortenedURL={shortenedURL} url={url[i]}/>
      })}
    </>
  );
}

export default App;
