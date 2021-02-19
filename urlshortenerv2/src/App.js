import React, { useState } from 'react';
import { GlobalStyle } from './components/styles/GlobalStyle';
import URLForm from './components/URLForm';
import URLTable from './components/URLTable';
import Hero from './components/Hero';

const App = () => {

  const[url, setUrl] = useState('');
  const[showShortenedURL, setShowShortenedURL] = useState('');
  const[hash, setHash] = useState('');
  const[shortenedURL, setShortenedURL] = useState('');

  const onSubmit = () =>{
    // Fetch API to create new API
    // Pass in URL
    // Set the hash, set the shortenedURL, and setShowShortenedURL
  }

  return (
    <>
      <GlobalStyle/>
      <Hero/>
      <URLForm
        handleURL={setUrl}
        onSubmit={onSubmit}
      />
      <URLTable/>
    </>
  );
}

export default App;
