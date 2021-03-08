import React, { useEffect, useState } from 'react';
import { GlobalStyle } from './components/styles/GlobalStyle';
import URLForm from './components/URLForm';
import ShortenedURL from './components/ShortenedURL';
import Hero from './components/Hero';
import axios from 'axios';

const App = () => {

  const[urls, setURL] = useState([]);

  const onSubmit = (fullURL) =>{
    // Fetch API to create new URL
    const {data} = axios({
      method: 'post',
      url: 'http://localhost:8080/hashURL',
      data: {
        url: fullURL
      }
    })
    .then(response => addURL(fullURL, response.data));
  }

  const addURL = (fullURL, shortURL) => {
    setURL([...urls, 
      {
        fullURL: fullURL,
        shortURL: shortURL
      }
    ]);
  }

  useEffect(() => {
    console.log(urls);
  }, [urls]);

  return (
    <>
      <GlobalStyle/>
      <Hero/>
      <URLForm
        onSubmit={onSubmit}
      />
      {urls.length > 0 && urls.map((url) => {
        return <ShortenedURL shortURL={url.shortURL} fullURL={url.fullURL}/>
      })}
    </>
  );
}

export default App;
